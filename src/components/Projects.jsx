import React from 'react'
import text from '../text-container/allText'
import ProjectCard from './ProjectCard'


function Projects() {
  return (
    <section className='relative w-screen h-full bg-[#fafafa] dark:bg-[#000000] overflow-x-hidden'>
      <div className='relative w-full h-full  md:w-[90%] 2xl:w-[50%] mx-auto bg-white dark:bg-[#18181b] p-4 md:p-6 lg:p-12 flex flex-col gap-10 md:gap-14 '>

        <div className='flex flex-col gap-7 '>
          <h1 className=' text-3xl lg:text-5xl font-lora font-semibold  text-gray-700 dark:text-white w-full lg:w-[70%]'>
            {text.projectHeading}
          </h1>
          <p className='text-sm md:text-base font-medium font-robotoSlab text-zinc-600 dark:text-zinc-400 w-full lg:w-[70%] flex items-center justify-center'>
            {text.projectSubHeading}
          </p>
        </div>


        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
          <ProjectCard
            logo="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            title="Planetaria"
            description="Creating technology to empower civilians to explore space on their own terms."
            link="#"
            linkText="planetaria.tech"
          />
          <ProjectCard
            logo="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            title="Planetaria"
            description="Creating technology to empower civilians to explore space on their own terms."
            link="#"
            linkText="planetaria.tech"
          />
          <ProjectCard
            logo="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            title="Planetaria"
            description="Creating technology to empower civilians to explore space on their own terms."
            link="#"
            linkText="planetaria.tech"
          />
          <ProjectCard
            logo="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            title="Planetaria"
            description="Creating technology to empower civilians to explore space on their own terms."
            link="#"
            linkText="planetaria.tech"
          />
          <ProjectCard
            logo="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            title="Planetaria"
            description="Creating technology to empower civilians to explore space on their own terms."
            link="#"
            linkText="planetaria.tech"
          />
          <ProjectCard
            logo="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            title="Planetaria"
            description="Creating technology to empower civilians to explore space on their own terms."
            link="#"
            linkText="planetaria.tech"
          />
          <ProjectCard
            logo="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            title="Planetaria"
            description="Creating technology to empower civilians to explore space on their own terms."
            link="#"
            linkText="planetaria.tech"
          />

        </div>


      </div>
    </section>
  )
}

export default Projects