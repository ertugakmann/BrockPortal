import React from "react";

import { PiStudentDuotone } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
    return (
        <div className="bg-[#F5F5F5] w-[100%] h-[100vh] flex justify-between">
            <div className="ml-2 sm:ml-12 mt-48">
                <h1 className="text-5xl font-extrabold leading-[1.15] text-brock-blue md:text-6xl ">
                    Brockenhurst College
                </h1>
                <div className="flex lg:flex-row flex-col gap-9 md:gap-16 mt-12 ">
                    <Link
                        className="box-border relative z-30 inline-flex items-center justify-center m-2 w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-brock-blue rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-gray-100 hover:ring-offset-gray-200 ease focus:outline-none"
                        href={"/student"}
                    >
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-[14px]">
                            <PiStudentDuotone className="relative w-5 h-5 mr-2 text-white" />
                            I am a Current Student
                        </span>
                    </Link>
                    <button className="box-border relative z-30 inline-flex items-center justify-center m-2 w-auto px-12 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-brock-blue rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-gray-100 hover:ring-offset-gray-200 ease focus:outline-none">
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-[14px]">
                            <FaWpforms className="relative w-5 h-5 mr-2 text-white" />
                            I am an Applicant
                        </span>
                    </button>
                </div>
                <img
                    src="https://students.brock.ac.uk/BrockLogo.png"
                    className="h-[7vh] mt-[18vh] sm:flex hidden"
                />
            </div>
            <div className="bg-black hidden sm:flex w-[50%] h-[100vh]">
                <img
                    src="https://students.brock.ac.uk/BrockHero.jpeg"
                    className="w-[100%] h-[100%] object-cover"
                />
            </div>
        </div>
    );
};

export default Login;
