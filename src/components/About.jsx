import React from 'react'
import allText from '../text-container/allText'
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";



function About() {

    return (
        <section className='relative w-screen bg-[#fafafa] dark:bg-[#000000] h-full'>
            <div className='relative bg-white dark:bg-[#18181b] h-full w-full  md:w-[90%] 2xl:w-[50%] m-auto lg:p-12 md:p-16 p-6 grid lg:grid-cols-[2fr_350px]  gap-6'>

                <div className="lg:col-start-2 lg:col-end-3 px-2">
                    <div className="w-72 h-72  lg:w-[320px] lg:h-[300px] 2xl:w-60 2xl:h-64 lg:m-auto  overflow-hidden rounded-2xl shadow-lg rotate-[5deg] border-2 border-gray-300 ">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/11/30/12/29/bicycle-1872682_640.jpg"
                            alt="Loading img"
                            className="w-full h-full object-cover object-center "
                        />
                    </div>
                </div>


                <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 self-center">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-3xl font-lora font-bold py-4 lg:p-0 dark:text-[white]'>
                        {allText.aboutMeHeading}
                    </h1>
                </div>


                {/* About Description */}
                <div className="text-zinc-600 dark:text-zinc-400 md:text-lg text-base font-robotoSlab flex flex-col gap-y-9 items-center justify-center">
                    <p>{allText.aboutMeDescription1} </p>
                    <p>{allText.aboutMeDescription2} </p>
                    <p>{allText.aboutMeDescription3} </p>
                    <p>{allText.aboutMeDescription4} </p>

                </div>


                <div className="flex flex-col gap-8 mt-6 mb-9 text-lg text-gray-700 font-lora">
                    <div className='flex flex-col items-start gap-3 p-2'>
                        <a href="#" className='flex items-center justify-center gap-6 ' target="_blank" rel="noopener noreferrer">
                            <RiTwitterXFill className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' /><span className='dark:text-zinc-400'>Follow on X</span>
                        </a>
                        <a href="#" className='flex items-center justify-center gap-6 ' target="_blank" rel="noopener noreferrer">
                            <CiInstagram className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' /><span className='dark:text-zinc-400'>Follow on Instagram</span>
                        </a>
                        <a href="https://github.com/Souradeep321" className='flex items-center justify-center gap-6 ' target="_blank" rel="noopener noreferrer">
                            <FaGithub className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' /><span className='dark:text-zinc-400'>Follow on Github</span>
                        </a>
                        <a href="#" className='flex items-center justify-center gap-6 ' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' /><span className='dark:text-zinc-400'>Follow on LinkedIn</span>
                        </a>
                    </div>
                    <div className='flex items-center gap-4 p-2 '>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                        </svg>
                        <p className='dark:text-zinc-400'><a href={`mailto:${allText.email}`}>{allText.email}</a></p>
                    </div>

                </div>



            </div>
        </section>
    )
}

export default About