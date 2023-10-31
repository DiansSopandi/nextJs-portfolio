import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonDashFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="flex max-w-[1240px] w-full h-full mx-auto p-2  justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let&apos;s build web and mobile app together
          </p>
          <h2 className="py-4 text-gray-700">
            <span className="text-[#5651e5]"> Guardians asguard</span>
          </h2>
          <h3 className="py-0 text-gray-700">FullStack Web App Developer</h3>
          <p className="py-0 text-gray-600 max-w-[70%] mx-auto">
            Specializing in building web and mobile app with Javascript
            Technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
              <BsFillPersonDashFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
