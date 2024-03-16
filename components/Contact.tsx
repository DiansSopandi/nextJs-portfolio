import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonDashFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full font-mono font-black poppins md:my-40 sm:my-0"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-base uppercase tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="text-base py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl scale-95 hover:scale-100 ease-in duration-1000 delay-100 border-solid border-orange-400 border-2"
                  // className="my-1 rounded-full shadow-lg scale-75  hover:scale-100  transition-all duration-1000 ease-in delay-100"
                  src="/assets/contact.jpg"
                  alt="/"
                  width="600"
                  height="400"
                />
              </div>
              <div>
                <h2 className="py-2 text-base text-[#5651e5] cursor-pointer">
                  Guardians asguard
                </h2>
                <p className="text-base font-bold py-2">
                  Fullstack Web App Developer
                </p>
                <p className="py-2">
                  I am available for freelance and fulltime positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div className="py-8">
                <p className="text-base">Connect with me</p>
                <div className="flex items-center justify-between py-4">
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

          {/* <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="py-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col px-4 ">
                    <label className="text-base  font-bold py-2 px-4">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      // className="rounded-xl scale-95 hover:scale-100 ease-in duration-1000 delay-100 "
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col px-4">
                    <label className="text-base  font-bold py-2 px-4">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col px-4 py-2">
                  <label className="text-base  font-bold py-2 px-4">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col px-4 py-2">
                  <label className="text-base  font-bold py-2 px-4">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col px-4 py-2">
                  <label className="text-base  font-bold py-2 px-4">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-xl p-3 border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full text-gray-100 p-4 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 duration-500">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
