"use client";

import Image from "next/image";
import { useState } from "react";

// Images and Icons
import BrockCrest from "@/public/assets/BrockCrest.png";
import { IoMenu } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { SiGoogleforms } from "react-icons/si";
import { IoLogInOutline } from "react-icons/io5";

export default function RootLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <div className="flex flex-col min-h-screen">
                {/* Mobile Top Bar */}
                <div className="sm:hidden bg-brock-blue text-white p-4 flex justify-between items-center">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-lg font-bold"
                    >
                        <IoMenu />
                    </button>
                </div>

                {/* Sidebar */}
                <aside
                    className={`${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed sm:translate-x-0 w-25 h-screen bg-[#2A8191] text-white transform transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className="p-6">
                        <Image
                            src={BrockCrest}
                            width={72}
                            height={72}
                            alt="brock-crest"
                        />
                        <ul>
                            <li className="mb-4 mt-5">
                                <div className="flex justify-center">
                                    <a
                                        href="#"
                                        className="text-white hover:underline flex justify-center items-center flex-col"
                                    >
                                        <MdOutlineDashboard size={"34px"} />
                                        <span className="text-sm">
                                            Dashboard
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline flex flex-col items-center"
                                >
                                    <MdOutlineDateRange size={"34px"} />
                                    <span className="text-sm">Timetable</span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline flex flex-col items-center"
                                >
                                    <IoMdSettings size={"34px"} />
                                    <span className="text-sm mt-2">
                                        Settings
                                    </span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline flex flex-col items-center"
                                >
                                    <LuNewspaper size={"34px"} />
                                    <span className="text-sm mt-2">Exams</span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline flex flex-col items-center"
                                >
                                    <TbReportSearch size={"34px"} />
                                    <span className="text-sm mt-2">
                                        Reports
                                    </span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline flex flex-col items-center"
                                >
                                    <SiGoogleforms size={"34px"} />
                                    <span className="text-sm mt-2">Forms</span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline flex flex-col items-center"
                                >
                                    <IoLogInOutline size={"34px"} />
                                    <span className="text-sm mt-2">
                                        Log Out
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Content */}
                <main className="sm:ml-24 pl-6 bg-[#F5F5F5] flex-grow">
                    {children}
                </main>

                {/* Sidebar open & close */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}
            </div>
        </div>
    );
}
