import { useEffect, useState } from "react";
import ThemeToggler from "./theme-toggler";
import Logo from "./logo";

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
      className={`container flex items-center justify-between py-4 fixed top-0 left-0 right-0 z-10 ${scrolled && "shadow-md backdrop-blur-2xl"}`}
    >
      <Logo />
      <nav className="hidden md:block shadow-lg dark:shadow-pink-500 px-12 py-3 rounded-full">
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
