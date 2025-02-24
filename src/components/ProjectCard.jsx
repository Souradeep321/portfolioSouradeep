import React from 'react'
import { FaLink } from "react-icons/fa";

function ProjectCard() {

  const projects = [
    {
      projectImg: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "appwriteBlog",
      description: "reating technology to empower civilians to explore space on their own terms.",
      link: "#",
      linkText: "blog.tech",
    },
    {
      projectImg: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "appwriteBlog",
      description: "reating technology to empower civilians to explore space on their own terms.",
      link: "#",
      linkText: "blog.tech",
    },
    {
      projectImg: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "appwriteBlog",
      description: "reating technology to empower civilians to explore space on their own terms.",
      link: "#",
      linkText: "blog.tech",
    },
    {
      projectImg: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "appwriteBlog",
      description: "reating technology to empower civilians to explore space on their own terms.",
      link: "#",
      linkText: "blog.tech",
    },
    {
      projectImg: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "appwriteBlog",
      description: "reating technology to empower civilians to explore space on their own terms.",
      link: "#",
      linkText: "blog.tech",
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