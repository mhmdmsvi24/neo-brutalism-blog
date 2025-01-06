export default function Nav() {
  const navItems = {
    Home: ["/"],
    Blog: ["/"],
    "About Me": ["/"],
    Contact: ["/"],
  };

  let navItemsList = Object.keys(navItems);
  let navItemsLink = Object.values(navItems);

  return (
    <div className="bg-white w-full min-h-[3rem] flex justify-center items-center border-b-4 border-black">
      <div className="container">
        {/* Left for Nav items */}
        <div>
          <ul className="flex gap-4 font-bold">
            {navItemsList.map((item, ind) => (
              <li key={item}>
                <a
                  href={navItemsLink[ind]}
                  className="px-2 py-3 block text-blue-900"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
