import React from "react";
import { cva } from "class-variance-authority";
import { cx } from "../../utilities/utils";

export default function Button({
  children,
  intent = "primary",
  size = "md",
  isIcon = false,
  disabled = false,
  onClick,
  className,
  ...props
}) {
  const styles = cva(
    "inline-flex items-center justify-center font-worksans font-bold rounded-md shadow-brut-sm border-brut hover:clear-brut-sm",
    {
      variants: {
        intent: {
          primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
          icon: "",
        },
        size: {
          sm: "px-3 py-1 text-sm max-w-[100px]",
          md: "px-4 py-2 text-base max-w-[125px]",
          lg: "px-5 py-2 text-lg max-w-[150px]",
          full: "w-full py-2 px-3",
          square: "p-2 aspect-square w-[60px]",
        },
        disabled: {
          false: null,
          true: "opacity-50 cursor-not-allowed",
        },
      },
      compoundVariants: [],
      defaultVariants: {
        color: "primary",
        size: "md",
        disabled: false,
      },
    }
  );

  const buttonClass = cx(
    styles({ intent, size, isIcon, disabled }),
    className // classes passed to className prop will be in priority
  );

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
