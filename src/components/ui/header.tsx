import Sun from "../icon/sun";

const Header = () => {
  return (
    <header className="container flex items-center justify-between py-4 sticky top-0">
      <h1>
        subash<span className="text-pink-500">.</span>
      </h1>
      <nav className="bg-white/50 shadow-sm px-12 py-3 rounded-full">
        <ul className="flex items-center gap-4">
          <li>Home</li>
          <li>About me</li>
          <li>Services</li>
          <li>My Work</li>
          <li>Contact me</li>
        </ul>
      </nav>
      <button>
        <Sun />
      </button>
    </header>
  );
};

export default Header;
