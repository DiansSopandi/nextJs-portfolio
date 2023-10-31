import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center w-full md:h-screen tracking-widest p-2 py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <p className="text-base tracking-widest uppercase text-[#5651e5]">
          About
        </p>
        <div className="text-gray-600 col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            quidem quos. Nobis temporibus laudantium, aliquam aut assumenda
            beatae unde quam ex praesentium corrupti, mollitia quos inventore
            soluta. Laudantium facere amet consequuntur inventore, distinctio
            molestiae dolor quibusdam, minus, rerum perspiciatis eveniet?
            Aliquam quidem laborum ut provident voluptatum rem aperiam, tenetur
            asperiores!
          </p>
        </div>
        <div className="text-gray-600 col-span-1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            aliquid dolore enim nesciunt? Et optio veritatis ipsum rem a
            excepturi aliquid, ullam voluptates minus dolorem laboriosam quidem,
            itaque tempore cum.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <img
            src="https://source.unsplash.com/600X400"
            alt="Image Caption"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
