import React from 'react'
import { FaLink } from "react-icons/fa";

function ProjectCard() {

  const projects = [
    {
      projectImg: "https://cdn.pixabay.com/photo/2020/02/11/19/56/laptop-4840790_1280.jpg",
      title: "appwriteBlog",
      description: "A fully functional blogging platform using React, Appwrite, Redux Toolkit, and Tailwind CSS with complete CRUD functionality.",
      link: "https://github.com/Souradeep321/AppwriteBlog",
      linkText: "AppwriteBlog",
    },
    {
      projectImg: "https://cdn.pixabay.com/photo/2020/03/19/21/25/cactus-4948833_640.jpg",
      title: "Portfolio Website",
      description: "A sleek personal portfolio showcasing my skills, projects, and contact information.",
      link: "https://github.com/Souradeep321/portfolioSouradeep",
      linkText: "Portfolio",
    },
    {
      projectImg: "https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg",
      title: "To-Do App",
      description: "A task manager with Redux Toolkit and Appwrite integration.to empower civilians to explore space on their own terms.",
      link: "https://github.com/Souradeep321/",
      linkText: "Todo",
    },
  ]

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {projects.map((project) => (
        <div className=" p-4 rounded-lg shadow-md flex flex-col gap-3 w-full bg-white dark:bg-[#18181b] transition-transform duration-300 lg:hover:scale-105 hover:shadow-lg hover:bg-[#d9d2d23d] dark:hover:bg-zinc-800">
          <div className="flex items-start flex-col gap-3">
            <img src={project.projectImg} alt={project.title} className="w-12 h-12 rounded-full border-[6px] border-white dark:border-zinc-600 shadow-lg" />
            <h3 className="text-lg font-lora font-semibold dark:text-[#ddddde]">{project.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-zinc-400 text-sm font-robotoSlab">{project.description}</p>
          <div className="flex items-center gap-2 text-gray-400 dark:text-[#ddddde] transition-transform duration-300  hover:text-[#11bfad] dark:hover:text-[#11bfad]  font-medium mt-2">
            <FaLink className="text-sm" />
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-sm font-robotoSlab font-semibold'>
              {project.linkText}
            </a>
          </div>
        </div>))}
    </div>

  )
}

export default ProjectCard