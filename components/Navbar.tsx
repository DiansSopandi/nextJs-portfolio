"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
// import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [nav, setNav] = useState(() => false),
    [shadow, setShadow] = useState(() => false),
    [navBg, setNavBg] = useState("#ecf0f3"),
    [linkColor, setLinkColor] = useState("#1f2937");

  const handleClickNav = () => setNav(!nav);

  // useEffect(() => {
  //   if (pathName === "/weather-forecast") {
  //     // setNavBg("transparent");
  //     setLinkColor("#ecf0f3");
  //   } else {
  //     setNavBg("#ecf0f3");
  //     setLinkColor("#1f2937");
  //   }
  // }, [pathName]);

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed bg-slate-200 w-full h-50 shadow-xl z-[100] "
          : "fixed bg-slate-200 w-full h-50 z-[100]  "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image
            src="/assets/profilePicture.jpg"
            alt=""
            width="80"
            height="25"
            className="my-1 rounded-full shadow-lg scale-75 border-solid border-orange-400 border-2 hover:scale-100  transition-all duration-1000 ease-in delay-100"
          />
        </Link>
        <div className="text-base font-bold  ">
          <ul className="hidden  md:flex md:text-sm">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b border-orange-500 border-solid">
                Home
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b  border-orange-500 border-solid">
                Projects
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b  border-orange-500 border-solid">
                Skills
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b  border-orange-500 border-solid">
                Contact
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b  border-orange-500 border-solid">
                About
              </li>
            </Link>
          </ul>
          <div
            onClick={() => handleClickNav()}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen text-base font-bold bg-black/70 "
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/assets/profilePicture.jpg"
                  alt=""
                  width="90"
                  height="35"
                  className="my-1 rounded-full shadow-lg scale-75 hover:scale-100 border-solid border-orange-400 border-2   transition-all duration-1000 ease-in delay-100"
                  onClick={() => handleClickNav()}
                />
              </Link>
              <div
                onClick={() => handleClickNav()}
                className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-sm">
                {`Let\'s Build Web App together`}
                {/* {`Let\'s Build Web and Mobile App together`} */}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul
              style={{ color: `${linkColor}` }}
              className="uppercase  md:flex"
            >
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Home
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] text-smNavbar">
                {`Let\'s Connect`}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 duration-500">
                  <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 duration-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 duration-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 duration-500">
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
