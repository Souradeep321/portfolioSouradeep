import React from 'react'
import { FaLink } from "react-icons/fa";

function ProjectCard({ logo, title, description, link, linkText }) {
  return (
    <div className=" p-4 rounded-lg shadow-md flex flex-col gap-3 w-full bg-white dark:bg-[#18181b] transition-transform duration-300 lg:hover:scale-105 hover:shadow-lg hover:bg-[#d9d2d23d] dark:hover:bg-zinc-800">
      <div className="flex items-start flex-col gap-3">
        <img src={logo} alt={title} className="w-12 h-12 rounded-full border-[6px] border-white dark:border-zinc-600 shadow-lg" />
        <h3 className="text-lg font-lora font-semibold dark:text-[#ddddde]">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-zinc-400 text-sm font-robotoSlab">{description}</p>
      <div className="flex items-center gap-2 text-gray-400 dark:text-[#ddddde] transition-transform duration-300  hover:text-[#11bfad] dark:hover:text-[#11bfad]  font-medium mt-2">
        <FaLink className="text-sm" />
        <a href={link} target="_blank" rel="noopener noreferrer" className='text-sm font-robotoSlab font-semibold'>
          {linkText}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard