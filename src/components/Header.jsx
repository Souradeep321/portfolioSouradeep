import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiX } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import ThemeChange from './ThemeChange';
import reactsvg from '../assets/react.svg'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/users/Souradeep321`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])


    // Function to lock/unlock body scroll when modal is open/closed
    const toggleBodyScroll = (isOpen) => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Call toggleBodyScroll whenever modal opens or closes
    useEffect(() => {
        toggleBodyScroll(isOpen);
    }, [isOpen]);


    return (
        <header className="relative w-screen flex bg-[#fafafa] dark:bg-[#000000] overflow-x-hidden">
            <nav className="relative 2xl:w-[50%] w-[100%] md:w-[90%] md:h-[15vh] h-[10vh] mx-auto flex items-center md:justify-around justify-between bg-white dark:bg-[#18181b] px-6 shadow-md">

                {/* Logo for Header */}
                <div>
                    <Link to='/'>
                        <img src={reactsvg} alt="loading" />
                    </Link>
                </div>
               

                {/* Navlinks for header */}
                <div className="hidden md:flex">
                    <ul className="relative flex gap-[39px] bg-white dark:bg-[#515151] px-[23px] py-[6px] rounded-[18px] md:text-base text-xs font-medium font-robotoSlab shadow-[1px_2px_3px_0px_#a7a6a6] dark:shadow-[1px_2px_3px_0px_#000000]">
                        {["About", "Projects", "Contact"].map((item, index) =>
                            <li key={index} className="relative dark:text-white">
                                <NavLink
                                    to={`/${item.toLowerCase()}`}
                                    className={({ isActive }) =>
                                        `relative px-2 py-1 ${isActive ? "text-[#11bfad] after:scale-x-100" : "hover:text-[#11bfad]"
                                        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#11bfad] after:scale-x-0 after:transition-transform`
                                    }
                                >
                                    {item}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>

                <div className='flex gap-[10px] items-center justify-center'>
                    <span className='md:hidden text-xl'>
                        <button
                            className='flex items-center justify-center font-lora  gap-0 bg-gray-200 dark:bg-[#515151] dark:text-white rounded-full px-3 py-2 text-xs '
                            onClick={() => { setIsOpen(true) }}>
                            menu<IoMdArrowDropdown />
                        </button>
                    </span>
                    <span>
                        <ThemeChange />
                    </span>
                </div>
            </nav>

            {/* Mobile Navbar Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black  bg-opacity-50 backdrop-blur-md z-50 ">

                    {/* Modal Content */}
                    <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg relative dark:bg-[#515151]">

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiX size={24} />
                        </button>

                        {/* Navigation Title */}
                        <h2 className="text-gray-800 text-lg font-semibold  dark:text-white mb-4">
                            Navigation
                        </h2>

                        {/* Navigation Links */}
                        <ul className="space-y-4 text-gray-600 ">
                            {["About", "Projects", "Contact"].map((item, index) => (
                                <li key={index} className="border-b border-gray-200 pb-2 last:border-b-0 dark:text-white">
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="block hover:text-gray-900"
                                        onClick={() => setIsOpen(false)} // Close modal on click
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>


    )
}

export default Header