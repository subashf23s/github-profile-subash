import { useEffect, useState } from "react";
import ThemeToggler from "./theme-toggler";

const linkItems = [
  { id: 1, link: "#home", text: "Home" },
  { id: 2, link: "#about-me", text: "About me" },
  { id: 3, link: "#services", text: "Services" },
  { id: 4, link: "#my-work", text: "My Work" },
  { id: 5, link: "#contact-me", text: "Contact me" },
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
            <li key={e.id} className="text-sm font-semibold cursor-pointer ">
              <a href={e.link}>{e.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggler />
    </header>
  );
};

export default Header;
