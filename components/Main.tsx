import React from "react";
import { Poppins } from "next/font/google";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonDashFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center font-mono font-black poppins"
    >
      <div className="flex max-w-[1240px] w-full h-full mx-auto p-2  justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let&apos;s build web app together
            {/* let&apos;s build web and mobile app together */}
          </p>
          <h2 className="py-4 text-gray-700">
            <span className="text-[#5651e5]"> Guardians asguard</span>
          </h2>
          <h3 className="py-0 text-gray-700">Full-Stack Web Developer</h3>
          <p className="py-0 text-gray-600 max-w-[70%] mx-auto">
            Experienced in designing and building dynamic, high-performance web
            applications with JavaScript technologies, ensuring efficiency,
            scalability, and seamless user experiences.
            {/* Specializing in building web app with Javascript Technologies */}
            {/* Specializing in building web and mobile app with Javascript
            Technologies */}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <a
              href="https://www.linkedin.com/in/dians-sopandi-44b785219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
                <FaLinkedin />
              </div>
            </a>
            <a
              href="https://github.com/DiansSopandi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
                <FaGithub />
              </div>
            </a>
            <a
              // href="https://wa.me/send?phone=628179183759"
              href="https://wa.me/628179183759"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
                <FaWhatsapp />
              </div>
            </a>
            {/* <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
              <AiOutlineMail />
            </div> */}
            {/* <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
              <BsFillPersonDashFill />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
