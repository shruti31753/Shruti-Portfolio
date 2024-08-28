import logo from "../assets/shrutilogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return( 
  <nav className="mb-2 flex items-center justify-between py-1">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-3 w-13"src={logo} alt="logo"/><h1 className="pb-16 text-2xl font-bold tracking-tight lg:mt-9 
                    lg:text-2.5xl">Shruti's Portfolio</h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        {/* <FaSquareXTwitter/>
        <FaInstagram/> */}
    </div>
  </nav>
  );
};

export default Navbar
