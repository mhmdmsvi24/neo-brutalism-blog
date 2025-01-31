import { cva } from "class-variance-authority";
import { cx } from "../utilities/utils";

export default function CardTags({
  children,
  intent = "outline",
  className = null,
}) {
  const styles = cva(
    "px-2 py-1 flex justify-center items-center text-xs border border-black grow shadow-brut-sm cursor-pointer font-worksans font-bold text-black/75 rounded-sm",
    {
      variants: {
        intent: {
          primary: "bg-blue-800 border border-white text-white",
          secondary: "bg-gray-400 border border-white text-black/50",
          outline: "border border-blue-800 text-black/85",
          ghost: "text-black",
        },
      },
    }
  );

  const tagClass = cx(styles({ intent }), className);

  return <div className={tagClass}>{children}</div>;
}
