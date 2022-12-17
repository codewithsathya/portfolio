import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Sathiya</span>
          </h1>
          <h2 className="text-gray-700">
            A Full-Stack Web Developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a full-stack web developer studying in IIT Bhubaneswar, India. I love programming, reading tech blogs and learning new technologies.
            {/* I am also crypto enthusiast and made some projects related to crypto which helped me while trading. I&apos;m currently learning Data Structures and Algorithms in leetcode. */}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedin size={25}/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub size={25}/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail size={25}/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonFill size={25}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
