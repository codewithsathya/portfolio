import React from "react";
import Image from "next/image";
import Link from "next/link";
import leetnotionImg from "../public/assets/projects/leetnotion.png";
import cryptotrackerImg from "../public/assets/projects/cryptotracker.png"
import photopiaImg from "../public/assets/projects/photopia.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Photopia" backgroundImg={photopiaImg} projectUrl="/" description="A Social media app made with NodeJS for a Hackathon"/>
          <ProjectItem title="Cryptotracker" backgroundImg={cryptotrackerImg} projectUrl="/" description="React app that shows change in price of cryptos in custom time frames"/>
          <ProjectItem title="Leetnotion" backgroundImg={leetnotionImg} projectUrl="/" description="NodeJS app made with typescript to integrate leetcode vscode extension with notion"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
