import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center w-full md:h-screen tracking-widest p-4 py-16 font-mono font-black"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <p className="text-base tracking-widest uppercase text-[#5651e5] ">
          About
        </p>
        <div className="text-gray-600 col-span-2 ">
          <p>
            Todays i&apos;m spending a lot of times and focusing on web
            development with using Javascript technologies both for website or
            mobile applications. I have got already experiences with several
            technologies later for desktop or web development, such as delphi or
            php for several years. also i have got already experiences with
            several databases relational database management system such as
            mysql and non relational database also well known as noSQL such as
            mongodb
          </p>
        </div>
        <div className="text-gray-600 col-span-1">
          <p></p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 hidden">
          <Image
            // src="https://source.unsplash.com/600X400"
            // alt="Image Caption"
            // className="rounded-xl"
            width="300"
            height="100"
            className="absolute z-1 rounded-xl"
            // layout="fill"
            // objectFit="cover"
            src="/assets/contact.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
