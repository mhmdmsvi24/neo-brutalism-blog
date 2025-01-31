import CardTags from "./CardTags";

export default function PostCards({ title, desc, tags, imgUrl, imgAlt }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm min-h-[400px] max-h-[500px] bg-white w-full max-w-[420px] shadow-brut border-brut hover-clear-brut cursor-pointer">
      <div className="flex items-center justify-center overflow-hidden basis-1/2 rounded-sm">
        <img
          src={imgUrl}
          alt={imgAlt}
          loading="lazy"
          className="object-cover h-[98%] w-[98%] border-2 border-black"
        />
      </div>
      <div className="flex flex-col justify-between px-2 py-3 basis-1/2">
        <div>
          <h3 className="text-lg text-blue-600 md:text-xl font-worksans font-extrabold">{title}</h3>
          <p className="text-ellipsis-2 font-worksans font-semibold">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <CardTags intent="outline" key={tag}>
              {tag}
            </CardTags>
          ))}
        </div>
      </div>
    </div>
  );
}
