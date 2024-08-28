import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/myimg.jpg";
// import {motion} from "framer-motion";
import resume from "../assets/RESUME--SHRUTI--SHIVHARE.pdf";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ml-20 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                 <div className="flex flex-col items-center lg:items-start">
                     <h1 className="mx-4 pb-20 text-6xl font-semi bold tracking-tight lg:mt-10 
                    lg:text-8xl">  Hi, I am <br/>Shruti Shivhare</h1> 
                    <span className=" mx-4 bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                      Full Stack Developer || Programmer || Problem Solver</span>
                    <p className="mx-4 my-3 max-w-6xl py-8 slate-300 font-semi bold text-2xl">
                      {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-half lg:w-1/2">
    <div className="flex flex-col items-center">
      {/* <div className="sparkle-container"> */}
        <img
            src={profilePic}
            alt="Shruti"
            className="border-4 border-purple-700 w-1/2 h-auto mt-8"
        />
        {/* <div className="sparkle"></div>
              <div className="sparkle sparkle-2"></div>
              <div className="sparkle sparkle-3"></div>
              <div className="sparkle sparkle-4"></div>
            </div> */}
        <a
            href={resume} // Replace this with the actual path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
        >
            <button className="px-4 py-2 border-2 border-purple-700 text-purple-700 bg-transparent hover:bg-purple-700 hover:text-white transition-colors duration-300">
                View Resume
            </button>
        </a>
    </div>
</div>

        </div>
    </div>
  );
};

export default Hero