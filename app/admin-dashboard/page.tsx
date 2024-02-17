import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const property = () => {
  return (
    <div className="pt-8 overflow-hidden font-mono font-bold">
      <div className=" w-full h-[30vh] lg:h-[30vh] lg:hidden md:block sm:block relative  mt-16">
        <div className=" justify-items-center absolute top-0  w-full h-[30vh] lg:h-[30vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src="/assets/projects/image-admin-dashboard-ls.png"
            alt="/"
            // width="200"
            // height="100"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="py-2 text-lg text-white z-10">Admin Dashboard</h2>
            <h3 className=" text-base text-white p-2">Vanilla Javascript</h3>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full pt-20">
        <div className=" w-full h-[60vh] lg:h-[60vh] hidden lg:block md:hidden sm:hidden relative px-8">
          <div className=" justify-items-center absolute top-0  w-full h-[30vh] lg:h-[30vh] bg-black/80 z-10 rounded-xl ">
            <Image
              className="absolute z-1 rounded-xl"
              layout="fill"
              objectFit="cover"
              src="/assets/projects/image-admin-dashboard-ls.png"
              alt="/"
              //   width="300"
              //   height="100"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="p-2 text-lg text-white z-10">Admin Dashboard</h2>
              <h3 className="text-base text-white p-2">Vanilla Javascript</h3>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-12 grid md:grid-cols-5 gap-1 pt-2">
          <div className="col-span-4">
            <p className="text-base font-bold">Project</p>
            <h3>Overview</h3>
            <p className="p-2">
              this Admin dashboard app built on HTML CSS and vanilla javascript
              technologies.
            </p>
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://admin-dashboard-vanilla-js.netlify.app/">
                <p>Demo</p>
              </Link>
            </button>
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://github.com/DiansSopandi/admin-dashboard-js">
                <p>Code</p>
              </Link>
            </button>
          </div>
          <div className="w-full col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-2 md:grid-cols-1 text-base">
                <p className="flex py-2 text-gray-600 items-center">
                  <RiRadioButtonFill className="pr-1" /> HTML
                </p>
                <p className="flex py-2 text-gray-600 items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="flex py-2 text-gray-600 items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
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
