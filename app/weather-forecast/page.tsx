import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const property = () => {
  return (
    <div className="pt-8 overflow-hidden font-black poppins">
      <div className=" w-full h-[30vh] lg:h-[30vh] lg:hidden md:block sm:block relative  mt-16">
        <div className=" justify-items-center absolute top-0  w-full h-[30vh] lg:h-[30vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src="/assets/projects/weather.png"
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="py-2 text-lg text-white z-10">Weather Forecast</h2>
            <h3 className=" text-base text-white p-2">Javascript / ReactJs</h3>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full pt-20 ">
        <div className=" w-1/2 h-[60vh] lg:h-[70vh] hidden lg:block md:hidden sm:hidden relative px-8">
          <div className=" justify-items-center absolute top-0  w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 rounded-xl border-solid border-orange-400 border">
            <Image
              className="absolute z-1 rounded-xl"
              layout="fill"
              objectFit="cover"
              src="/assets/projects/weather.png"
              alt="/"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="p-2 text-lg text-white z-10">Weather Forecast</h2>
              <h3 className="text-base text-white p-2">Javascript - ReactJs</h3>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-12 grid md:grid-cols-5 gap-1 pt-2">
          <div className="col-span-4">
            <p className="text-base font-bold">Project</p>
            <h3>Overview</h3>
            <p className="p-2">
              This application is based on JavaScript technologies which uses
              the React framework and some JavaScript libraries, fetch data from
              weather openAPI, use simple CSS stylesheet and HTML.<br></br> The
              way this application works is simple, just enter a certain city or
              place where the weather forecast will be known.
            </p>
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://weather-progressif-web-app.netlify.app/">
                <p>Demo</p>
              </Link>
            </button>
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://github.com/DiansSopandi/weather_pwa_web_app/">
                <p>Code</p>
              </Link>
            </button>
          </div>
          <div className="w-full col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 border border-solid border-orange-500">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-2 md:grid-cols-1 text-base">
                <p className="flex py-2 text-gray-600 items-center ">
                  <RiRadioButtonFill className="pr-1" /> ReactJs
                </p>
                <p className="flex py-2 text-gray-600 items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="flex py-2 text-gray-600 items-center">
                  <RiRadioButtonFill className="pr-1" /> openAPI
                </p>
                <p className="flex py-2 text-gray-600 items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="flex py-2 text-gray-600 items-center">
                  <RiRadioButtonFill className="pr-1" /> HTML
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="text-base font-bold underline cursor">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default property;
