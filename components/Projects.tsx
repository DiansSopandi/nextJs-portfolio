import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full font-mono font-black poppins md:my-40 sm:my-0"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-base tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="text-sm py-4">What I&apos;ve Built</h2>
        <div className="grid  gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
          <div className="flex items-center justify-center relative h-auto max-w-xl shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="w-full rounded-xl group-hover:opacity-10"
              src="/assets/projects/weather.png"
              alt="/"
              width="800"
              height="400"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-center text-2xl text-white tracking-wider ">
                Weather Forecast
              </h3>
              <p className="pt-2 pb-4 text-white text-center">React Js</p>
              {/* <Link href="https://weather-progressif-web-app.netlify.app/"> */}
              <Link href="/weather-forecast">
                <p className="text-center text-lg py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer ">
                  More Info...
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center relative h-auto max-w-xl shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="w-full rounded-xl group-hover:opacity-10"
              src="/assets/projects/image-admin-dashboard-ls.png"
              alt="/"
              width="800"
              height="400"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-center text-2xl text-white tracking-wider ">
                Admin Dashboard
              </h3>
              <p className="pt-2 pb-4 text-white text-center">Vanilla Js</p>
              {/* <Link href="https://weather-progressif-web-app.netlify.app/"> */}
              <Link href="/admin-dashboard">
                <p className="text-center text-lg py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer ">
                  More Info...
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center relative h-auto max-w-xl shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="w-full rounded-xl group-hover:opacity-10"
              src="/assets/projects/certification_ls.png"
              alt="/"
              width="800"
              height="400"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-center text-2xl text-white tracking-wider ">
                Personal Biodata Certification
              </h3>
              <p className="pt-2 pb-4 text-white text-center">
                NextJs - NestJS Frontend Backend Javascript Framework
              </p>
              {/* <Link href="https://weather-progressif-web-app.netlify.app/"> */}
              <Link href="/knowme">
                <p className="text-center text-lg py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer ">
                  More Info...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
