import Image from "next/image";
import React from "react";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 font-mono font-black">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-base tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-base">What I Can Do</h2>
        <SkillsItem />
      </div>
    </div>
  );
};

export default Skills;
