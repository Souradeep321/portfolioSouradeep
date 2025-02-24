import React from 'react'
import allText from '../text-container/allText'
import ProjectCard from './ProjectCard'


function Projects() {
  return (
    <section className='relative w-screen h-full bg-[#fafafa] dark:bg-[#000000] overflow-x-hidden'>
      <div className='relative w-full h-full  md:w-[90%] 2xl:w-[50%] mx-auto bg-white dark:bg-[#18181b] p-4 md:p-6 lg:p-12 flex flex-col gap-10 md:gap-14 '>

        <div className='flex flex-col gap-7 '>
          <h1 className=' text-3xl lg:text-5xl font-lora font-semibold  text-gray-700 dark:text-white w-full lg:w-[70%]'>
            {allText.projectHeading}
          </h1>
          <p className='text-sm md:text-base font-medium font-robotoSlab text-zinc-600 dark:text-zinc-400 w-full lg:w-[70%] flex items-center justify-center'>
            {allText.projectSubHeading}
          </p>
        </div>

        {/* project card here */}
        <div>
          <ProjectCard />
        </div>

      </div>
    </section>
  )
}

export default Projects