import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center w-full md:h-screen tracking-widest p-4 py-16 font-mono font-semibold poppins"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <p className="text-base tracking-widest uppercase text-[#5651e5]">
          About
        </p>
        <div className="text-gray-600 col-span-2 text-justify font-montserrat">
          <p>
            {/* Todays i&apos;m spending a lot of times and focusing on web
            development with using Javascript technologies for website
            applications.  */}
            Today, I am dedicating a significant amount of time to web
            development, focusing on JavaScript technologies for building modern
            web applications.
            <br></br>
            {/* Todays i&apos;m spending a lot of times and focusing on web
            development with using Javascript technologies both for website or
            mobile applications. <br></br> */}
            <br></br>
            {/* I have got already experiences with several technologies
            later for desktop or web development, such as delphi or php for
            several years.  */}
            I have extensive experience in desktop and web development, having
            worked with technologies like Delphi and PHP for several years.
            <br></br>
            <br></br>
            Additionally, I have hands-on experience with various database
            management systems, including relational databases such as MySQL and
            non-relational (NoSQL) databases like MongoDB.
            {/* Also, i have got already experiences with several databases
            relational database management system such as mysql and non
            relational database also well known as noSQL such as mongodb */}
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
