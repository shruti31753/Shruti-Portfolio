import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { PiFileCppFill } from "react-icons/pi";
import { MdOutlineRecommend } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { GiRadarSweep } from "react-icons/gi";
import { TbHexagonLetterCFilled } from "react-icons/tb";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoIosTimer } from "react-icons/io";
const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">My Skills</h1>
      <p className="text-2xl text-gray-600 text-center mb-8">Here are some of my skills on which i have been working on.</p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-transparent border-2 border-purple-900 hover:border-purple-500 rounded-lg p-8 w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mx-2">
        <h2 className="text-lg font-bold mb-2">Frontend</h2>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <FaHtml5 className="text-3xl text-orange-500 mr-2" />
                    <p className="text-gray-600 font-semibold">HTML</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <FaCss3 className="text-3xl text-blue-500 mr-2" />
                    <p className="text-gray-600 font-semibold">CSS</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <IoLogoJavascript className="text-3xl text-yellow-500 mr-2" />
                    <p className="text-gray-600 font-semibold">JavaScript</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <RiReactjsLine className="text-3xl text-cyan-400 mr-2" />
                    <p className="text-gray-600 font-semibold">React</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <FaBootstrap className="text-3xl text-purple-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Bootstrap</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <RiTailwindCssFill className="text-3xl text-teal-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="bg-transparent border-2 border-purple-900 hover:border-purple-500 rounded-lg p-8 w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mx-2">
        <h2 className="text-lg font-bold mb-2">Backend</h2>
          <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <TbBrandMysql className="text-3xl text-blue-500 mr-2" />
                    <p className="text-gray-600 font-semibold">MySQL</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <FaPython className="text-3xl text-yellow-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Python</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <FaNodeJs className="text-3xl text-green-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Node Js</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="bg-transparent border-2 border-purple-900 hover:border-purple-500 rounded-lg p-8 w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mx-2">
        <h2 className="text-lg font-bold mb-2">Programming Languages</h2>
  <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <TbHexagonLetterCFilled className="text-3xl text-red-500 mr-2" />
                    <p className="text-gray-600 font-semibold">C</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <PiFileCppFill className="text-3xl text-blue-500 mr-2" />
                    <p className="text-gray-600 font-semibold">C++</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <FaPython className="text-3xl text-yellow-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Python</p>
            </div>
  </div>
</div>
        <div className="bg-transparent border-2 border-purple-900 hover:border-purple-500 rounded-lg p-8 w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mx-2">
        <h2 className="text-lg font-bold mb-2">Soft Skills</h2>
  <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <MdOutlineRecommend className="text-3xl text-blue-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Communication</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <RiTeamFill className="text-3xl text-green-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Teamwork</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <MdLeaderboard className="text-3xl text-yellow-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Leadership</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <GiRadarSweep className="text-3xl text-purple-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Adaptability</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <HiOutlineClipboardDocumentCheck className="text-3xl text-orange-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Problem-Solving</p>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 flex items-center">
                    <IoIosTimer className="text-3xl text-red-500 mr-2" />
                    <p className="text-gray-600 font-semibold">Time Management</p>
            </div>
  </div>
</div>
</div>
</div>
  );
};


export default Skills;