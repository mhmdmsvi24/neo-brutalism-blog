import CardTags from "./CardTags";

export default function PostCards({ title, desc, tags, imgUrl, imgAlt }) {
  return (
    <div className="flex flex-col overflow-hidden p-1 rounded-md h-[400px] w-full max-w-[400px] border-2 border-black shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all delay-100 duration-200">
      <div className="basis-1/2 overflow-hidden flex justify-center items-center">
        <img
          src={imgUrl}
          alt={imgAlt}
          loading="lazy"
          className="object-cover h-[98%] w-[98%] rounded-md border-2 border-black"
        />
      </div>
      <div className="basis-1/2 px-2 py-3 flex flex-col justify-between">
        <div>
          <h3 className="text-blue-600 text-lg font-bold">{title}</h3>
          <p className="text-ellipsis-2">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <CardTags
              tagName={tag}
              variant="outline"
              color="blue-800"
              key={tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
