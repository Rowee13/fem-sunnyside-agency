import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";

import { logo } from "../assets";
import { links } from "../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="absolute top-0 inset-x-0 flex justify-between items-center px-10 py-8 bg-transparent z-10">
      <img src={logo} alt="sunnyside logo" className="h-7 lg:h-8" />

      <div className="hidden lg:flex flex-row items-center">
        <ul className="flex flex-row font-barlow text-white">
          {links.map((link) => (
            <li key={link.id} className="pr-14 hover:text-dark-blue">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <a
          href="#footer"
          className="bg-white px-7 py-4 rounded-full font-fraunces uppercase font-extrabold hover:bg-opacity-30 hover:text-white"
        >
          Contact
        </a>
      </div>

      <div className="lg:hidden">
        {toggleMenu ? (
          <IoClose
            className="w-10 h-10 text-white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <IoMenuOutline
            className="w-10 h-10 text-white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="slide-menu absolute left-10 right-10 top-32 flex flex-col items-center justify-center bg-white p-10">
          <div className="absolute right-0 top-[-40px] w-10 h-10 border-t-[40px] border-t-transparent border-r-[40px] border-r-white " />
          <ul className="flex flex-col items-center justify-center font-barlow text-desaturated-blue gap-y-7">
            {links.map((link) => (
              <li key={link.id} className="font-barlow text-xl">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <a
            href="#footer"
            className="bg-yellow px-7 py-4 mt-8 rounded-full font-fraunces uppercase font-extrabold hover:bg-opacity-30 hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
