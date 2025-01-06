export default function CardTags({ tagName, variant, color }) {
  function whichVariant(variant) {
    let res = null;

    switch (variant) {
      case "primary":
        res = `bg-${color} border border-white text-white`;
        break;
      case "secondary":
        res = `bg-${color} border border-white text-black/50`;
        break;
      case "outline":
        res = `border border-${color} text-black`;
        break;
      case "ghost":
        res = `text-${color} text-black`;
        break;
    }

    return `${res} rounded-lg px-2 py-1 flex justify-center items-center font-base text-sm border border-black grow`;
  }

  return <div className={whichVariant(variant)}>{tagName}</div>;
}
