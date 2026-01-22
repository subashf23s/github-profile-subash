const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <h1>
        subash<span className="text-pink-500">.</span>
      </h1>
      <nav className="bg-white bg-opacity-50 shadow-sm px-12 py-3 rounded-full">
        <ul className="flex items-center gap-4">
          <li>Home</li>
          <li>About me</li>
          <li>Services</li>
          <li>My Work</li>
          <li>Contact me</li>
        </ul>
      </nav>
      <div>dark</div>
    </header>
  );
};

export default Header;
