import Button from "../ui/Button";
import Link from "next/link";

export default function Nav() {
  const navItems = {
    Home: "/",
    Blog: "/blog",
    "About Me": "/about",
    Contact: "/contact",
    "Ask Me": "/ask",
  };

  let navItemsList = Object.keys(navItems);
  let navItemsLink = Object.values(navItems);


  return (
    <header className="flex items-center justify-center w-full bg-white">
      <div className="flex flex-col w-screen h-full">
        <div className="py-2 text-2xl italic font-bold text-center bg-yellow-400 font-work-sans-extrabold">
          Neo Brutalism
        </div>

        <nav className="py-2 text-lg border-t-2 border-b-2 border-black font-work-sans-extrabold">
          <div className="container flex justify-between mx-auto">
            <ul className="flex justify-center gap-4 font-bold before:content-none">
              {navItemsList.map((item, ind) => (
                <li key={item}>
                  <Link href={navItemsLink[ind]} className="block px-2 py-3 text-blue-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 items-center">
              <Button intent="primary" size="md">
                <Link href="/login">
                  Login
                </Link>
              </Button>
              <Button intent="primary" size="md">
                <Link href="/register">
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
