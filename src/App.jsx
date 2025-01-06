import CardsData from "./data/card-data";
import Nav from "./components/navigation/Nav";
import PostCards from "./components/PostCards";
import useFetch from "./hooks/useFetch";

/*
{
    title: "Getting Started with React",
    shortDesc:
      "Learn the basics of building components and managing state in React.",
    dateCreated: "2025-01-01",
    tags: ["React", "JavaScript", "Front End"],
    imageUrl: "https://via.placeholder.com/150",
  },

  
*/

export default function App() {
  const { data, loading, error } = useFetch("https://picsum.photos/v2/list");

  const { author, download_url, hight, id, url, width } = data;

  return (
    <div className="h-svh flex flex-col text-base">
      <Nav />

      <main>
        <ul>
          {loading && "Meow"}
          {!loading && error && "Something Went wrong!"}
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 m-2">
            {data.map(
              ({ author, download_url, hight, id, url, width }, ind) => (
                <PostCards
                  title={CardsData[0].title}
                  desc={CardsData[0].shortDesc}
                  tags={CardsData[0].tags}
                  imgUrl={download_url}
                  imgAlt={author}
                  key={author + url}
                />
              )
            )}
          </div>
        </ul>
      </main>
    </div>
  );
}
