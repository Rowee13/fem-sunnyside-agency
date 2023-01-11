import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { logoFooter } from "../assets";
import { links } from "../constants";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-moderate-cyan02 text-desaturated-cyan flex flex-col items-center py-16"
    >
      <a href="#hero">
        <img src={logoFooter} alt="sunnyside logo" className="h-8" />
      </a>

      <div className="flex flex-row items-center">
        <ul className="flex flex-row font-barlow gap-x-14 pt-10">
          {links.map((link) => (
            <li key={link.id} className="hover:text-white">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row gap-x-6 pt-24">
        <a href="/">
          <AiFillFacebook className="w-6 h-6 hover:text-white" />
        </a>
        <a href="/">
          <AiOutlineInstagram className="w-6 h-6 hover:text-white" />
        </a>
        <a href="/">
          <AiOutlineTwitter className="w-6 h-6 hover:text-white" />
        </a>
        <a href="/">
          <FaPinterest className="w-6 h-6 hover:text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
