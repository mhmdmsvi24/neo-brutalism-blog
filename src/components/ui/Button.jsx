import React from "react";
import { cva } from "class-variance-authority";
import { cx } from "../../utilities/utils";

export default function Button({
  children,
  intent = "primary",
  size = "md",
  isDisabled = false,
  onClick,
  className,
}) {
  const styles = cva(
    "inline-flex items-center justify-center font-work-sans-med rounded-md shadow-brut-sm border-brut hover:clear-brut-sm",
    {
      variants: {
        intent: {
          primary:
            "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
        },
        size: {
          sm: "px-3 py-1 text-sm",
          md: "px-6 py-2 text-base",
          lg: "px-8 py-3 text-lg",
        },
        disabled: {
          false: null,
          true: "opacity-50 cursor-not-allowed",
        },
      },
      compoundVariants: [{}],
      defaultVariants: {
        color: "primary",
        size: "md",
        disabled: false,
      },
    }
  );

  const buttonClass = cx(
    styles({ intent, size, isDisabled }),
    className // classes passed to className prop will be in priority
  );

  return (
    <button className={buttonClass} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
