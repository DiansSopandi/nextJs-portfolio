import Image from "next/image";
import React from "react";

const SkillsItem = () => {
  const skillsItem = [
    { image: "html.png", text: "HTML" },
    { image: "css.png", text: "CSS" },
    { image: "tailwind.png", text: "Tailwind" },
    { image: "javascript.png", text: "Javascript" },
    { image: "typescript.png", text: "Typescript" },
    { image: "react.png", text: "ReactJs" },
    { image: "nextjs.png", text: "NextJs" },
    { image: "node.png", text: "NodeJs" },
    { image: "nestjs.svg", text: "NestJs" },
    { image: "mysql.png", text: "mySQL" },
    { image: "mongo.png", text: "mongodb" },
    { image: "docker.png", text: "Docker" },
  ];
  return (
    <div className="grid md:grid-col-2 lg:grid-cols-4 gap-8">
      {skillsItem.map((item: Record<string, string>, ix: number) => (
        <div
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          key={ix}
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image
                src={`/assets/skills/${item.image}`}
                alt="/"
                width="65"
                height="65"
              />
            </div>
            <div className="flex flex-col item-center justify-center">
              <h3 className=" text-base" key={ix}>
                {item.text}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsItem;
