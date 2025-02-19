import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className='overflow-x-hidden w-screen relative bottom-0 h-[17vh] bg-[#fafafa] dark:bg-[#000000]'>
            <div className=' flex flex-col md:flex-row items-center justify-start md:justify-around gap-5 pt-4 bg-white dark:bg-[#18181b] h-[100%] w-[100%] m-auto md:w-[90%] 2xl:w-[50%]'>

                <div className='font-robotoSlab font-medium'>
                    <ul className='flex gap-3 '>
                        {['About', 'Projects', 'Contact'].map((item, index) =>
                            <li key={index} className='text-sm md:text-base dark:text-white'>
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

                <div className=' text-zinc-600 dark:text-zinc-400'>
                    <p className="text-sm md:text-base font-poppins">
                        © 2025 Souradeep Hazra. All rights reserved.
                    </p>
                </div>


            </div>
        </footer>
    )
}

export default Footer