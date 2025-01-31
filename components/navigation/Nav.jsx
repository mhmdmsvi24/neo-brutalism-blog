"use client";

import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Link from "next/link";
import { Menu } from "lucide-react";

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

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    console.log(isNavOpen);
  }, [isNavOpen]);

  return (
    <header className="flex items-center justify-center w-full bg-white">
      <div className="flex flex-col w-screen h-full">
        <div className="py-2 text-2xl italic font-bold text-center bg-yellow-400 font-work-sans-extrabold">
          Neo Brutalism
        </div>

        {/* Implementing Hamburger Menu is supperbly complex and time consuming please avoid making any changes to core styles */}
        <nav className="py-2 text-lg border-t-2 border-b-2 border-black font-work-sans-extrabold bg-white">
          <div className="container flex justify-between mx-auto px-4 md:px-0 items-center">
            {/* drop shadow when menu is open */}
            <div
              className={`hamburger-dropshadow ${isNavOpen ? "sm:block lg:hidden" : "hidden"}`}
              onClick={() => isNavOpen && setIsNavOpen(!setIsNavOpen)}
            ></div>

            {/* Navlist */}
            <ul className={`hamburger-menu ${isNavOpen ? "flex" : "hidden"}`}>
              {navItemsList.map((item, ind) => (
                <li key={item}>
                  <Link href={navItemsLink[ind]} className="block px-2 py-3 text-blue-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger icon */}
            <div
              className={`hamburger-icon ${isNavOpen ? "sm:block lg:hidden" : ""}`}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Menu size={32} />
            </div>

            <div className="flex gap-2 items-center ml-auto">
              <Button intent="primary" size="md">
                <Link href="/login">Login</Link>
              </Button>
              <Button intent="primary" size="md">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
