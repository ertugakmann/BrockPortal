"use client";

import { useState } from "react";

export default function RootLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <div className="flex flex-col min-h-screen">
                {/* Mobil Üst Bar */}
                <div className="sm:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-lg font-bold"
                    >
                        Menu
                    </button>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-white"
                    >
                        {isSidebarOpen ? "Close" : "Open"}
                    </button>
                </div>

                {/* Sidebar */}
                <aside
                    className={`${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed sm:translate-x-0 w-64 h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Menu</h2>
                        <ul>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline"
                                >
                                    Profile
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline"
                                >
                                    Settings
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="#"
                                    className="text-white hover:underline"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Content */}
                <main className="sm:ml-64 p-8 w-full bg-gray-100 flex-grow">
                    {children}
                </main>

                {/* Sidebar açıkken tıklama ile kapatma */}
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
