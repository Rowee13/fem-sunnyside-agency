import { logo } from "../assets";
import { links } from "../constants";

const Navbar = () => {
  return (
    <nav className="absolute top-0 inset-x-0 flex justify-between items-center px-10 py-8 bg-transparent z-10">
      <img src={logo} alt="sunnyside logo" className="h-8" />

      <div className="flex flex-row items-center">
        <ul className="flex flex-row font-barlow text-white">
          {links.map((link) => (
            <li key={link.id} className="pr-14">
              <a href="/">{link.title}</a>
            </li>
          ))}
        </ul>

        <button className="bg-white px-7 py-4 rounded-full font-fraunces uppercase font-extrabold hover:bg-opacity-30 hover:text-white">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
