import CardsData from "../data/card-data";
import Loader from "./ui/Loader";
import PostCards from "./PostCards";
import React from "react";
import useFetch from "../hooks/useFetch";

export default function Blog() {
  const { data, loading, error } = useFetch(
    "https://picsum.photos/v2/list?limit=5"
  );

  return (
    <main className={loading ? "flex justify-center items-center h-svh" : null}>
      <ul>
        {loading && <Loader />}
        {!loading && error && "Something Went wrong!"}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-3 m-3 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map(
              ({ author, download_url, hight, id, url, width }, ind) => (
                <PostCards
                  title={CardsData[ind].title}
                  desc={CardsData[ind].shortDesc}
                  tags={CardsData[ind].tags}
                  imgUrl={download_url}
                  imgAlt={author}
                  key={`${author} + ${url}`}
                />
              )
            )}
          </div>
        )}
      </ul>
    </main>
  );
}
