import React from "react";
import Image from "next/image";

import profile from "../public/assets/profile.png"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-8 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={profile} alt="/" width="400" height="0" />
        </div>
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-lg">Hi there! My name is Sathiya Seelan and I am currently studying at IIT Bhubaneswar. I have a strong background in programming and web development, with expertise in languages such as Java, JavaScript, HTML, CSS, and TypeScript. In addition to these core skills, I also have experience working with popular frameworks like Node.js, Express, and React. This diverse set of skills allows me to build complex and interactive web applications.</p>
          <p className="py-2 text-gray-600 text-lg">I am passionate about using my knowledge and expertise to create innovative and user-friendly web experiences. Whether I am working on a solo project or collaborating with a team, I am always eager to learn and push myself to new heights. I believe that my skills and experience make me a valuable asset to any organization looking to build high-quality web applications. I am excited to continue building on my knowledge and skills as I progress through my studies and career.</p>
          <p className="py-2 text-gray-600 underline cursor-pointer text-lg">Check out some of my latest projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
