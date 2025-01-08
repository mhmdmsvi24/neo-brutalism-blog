import Blog from "./components/Blog";
import Footer from "./components/footer/Footer";
import Nav from "./components/navigation/Nav";

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
  return (
    <div className="flex flex-col text-base h-svh">
      <Nav />
      <Blog />
      <Footer />
    </div>
  );
}
