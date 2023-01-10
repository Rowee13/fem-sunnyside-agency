import { logo } from "../assets";
import { links } from "../constants";

const Navbar = () => {
  return (
    <div className="bg-desaturated-cyan w-full flex justify-between items-center px-10 py-8">
      <img src={logo} alt="sunnyside logo" />

      <div className="flex flex-row items-center">
        <ul className="flex flex-row font-barlow text-white">
          {links.map((link) => (
            <li key={link.id} className="pr-14">
              <a href="/">{link.title}</a>
            </li>
          ))}
        </ul>

        <button className="bg-white px-7 py-4 rounded-full font-fraunces uppercase font-extrabold">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
