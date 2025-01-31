"use client";

import PostCards from "@/components/PostCards";
import React from "react";
import useFetch from "@/hooks/useFetch";

export default function blogPage() {
  const [imgData, imgLoading, imgError] = useFetch("https://picsum.photos/v2/list?limit=5");
  const [postData, postLoading, postError] = useFetch("http://localhost:4000/posts");

  const isPostReady = !imgLoading && !postLoading && !imgError && !postError;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 font-worksans font-medium md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grow gap-y-4 py-3 w-full justify-items-center">
        {isPostReady &&
          postData.map(({ id, title, shortDesc, dateCreated, tags }) => (
            <PostCards
              title={title}
              desc={shortDesc}
              tags={tags}
              imgUrl={imgData[id - 1]["download_url"]}
              imgAlt={imgData[id - 1]["author"]}
              key={`${id}${title}${dateCreated}`}
            />
          ))}
      </div>
    </div>
  );
}
