import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const property = () => {
  return (
    <div className="pt-8">
      <div className=" w-full h-[30vh] lg:h-[30vh] lg:hidden md:block sm:block relative px-8 mt-16">
        <div className=" justify-items-center absolute top-0  w-full h-[30vh] lg:h-[30vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            // objectFit="cover"
            src="/assets/projects/weather.png"
            alt="/"
            // width="200"
            // height="100"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="py-2 text-lg text-white z-10">Weather Forecast</h2>
            <h3 className=" text-base text-white p-2">Javascript / ReactJs</h3>
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
              src="/assets/projects/weather.png"
              alt="/"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="p-2 text-lg text-white z-10">Weather Forecast</h2>
              <h3 className="text-base text-white p-2">Javascript / ReactJs</h3>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-12 grid md:grid-cols-5 gap-8 pt-2">
          <div className="col-span-4">
            <p className="text-base font-bold">Project</p>
            <h3>Overview</h3>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error a
              quae ad dignissimos dolor distinctio. Reprehenderit nemo pariatur
              ratione, eum sunt dolorum facilis eveniet quod quas illum
              architecto ducimus sint, nihil nesciunt quaerat porro. Quia quam
              deserunt nam blanditiis illum veniam laudantium. Nulla reiciendis
              esse voluptates, tempora error ea aut, officia quisquam tenetur
              totam corporis vel eius expedita adipisci quos? Nostrum dolorum
              veniam libero nulla accusantium ex eum impedit numquam ab
              recusandae maxime ipsam dolorem, ducimus sunt, nam cupiditate fuga
              officiis labore esse quia. Itaque placeat aspernatur eius
              nesciunt, autem in sint recusandae hic sit ad ipsum ut?
              Asperiores, quisquam?
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
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1 text-base font-bold">
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
