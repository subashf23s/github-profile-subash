import { useEffect, useState } from "react";
import Sun from "../icon/sun";

const linkItems = [
  { id: 1, link: "#home", text: "Home" },
  { id: 2, link: "#about-me", text: "About me" },
  { id: 3, link: "#services", text: "Services" },
  { id: 4, link: "", text: "My Work" },
  { id: 5, link: "", text: "Contact me" },
];
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <header
      className={`container flex items-center justify-between py-4 sticky top-0 ${scrolled && "shadow-md backdrop-blur-2xl"}`}
    >
      <h1>
        subash<span className="text-pink-500">.</span>
      </h1>
      <nav className="bg-white/50 shadow-sm px-12 py-3 rounded-full">
        <ul className="flex items-center gap-4">
          {linkItems.map((e) => (
            <li
              key={e.id}
              className="font-semibold cursor-pointer text-gray-500 hover:text-gray-700"
            >
              <a href={e.link}>{e.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="cursor-pointer">
        <Sun />
      </button>
    </header>
  );
};

export default Header;
