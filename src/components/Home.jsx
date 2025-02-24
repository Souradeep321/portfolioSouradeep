import React, { useEffect, useState, useRef } from 'react';
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HomeCard from './HomeCard';
import allText from '../text-container/allText';


function Home() {
  const [data, setData] = useState({});


  const texts = [
    "Welcome to My Portfolio!",
    "Hi, I'm Souradeep Hazra!",
    "I build modern web applications.",
    "I love designing and coding!",
    "Let's create something amazing!"
  ];


  const typingSpeed = 100; // Typing speed (milliseconds)
  const delayBetweenTexts = 100; // Pause before switching text

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/Souradeep321`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    if (!isDeleting && text === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, charIndex, index]);



  return (
    <section className='relative w-screen h-full bg-[#fafafa] dark:bg-[#000000] overflow-x-hidden'>
      <div className="relative 2xl:w-[50%] w-[100%] md:w-[90%] h-[100%] bg-white dark:bg-[#18181b] mx-auto lg:p-12 px-6 py-4 ">

        {/* Profile Image */}
        <div className='flex items-center justify-normal '>
          <img src={data.avatar_url} alt="user img" className="h-28 w-28 rounded-full border-2 border-white dark:border-[#18181b] dark:text-white" />
        </div>


        {/* Multi-Text Typewriter Animation */}
        <div className="  mt-4 md:text-5xl text-2xl font-lora font-semibold text-gray-700 
        dark:text-white h-[8vh] md:h-[10%] w-full  ">
          {text}
          <span className="animate-blink blinking-cursor">|</span>
        </div>

        {/* Description */}
        <p className="text-base mt-3 font-medium font-robotoSlab text-zinc-600 dark:text-zinc-400 leading-8 w-full
        md:w-[70%] ">
          {allText.homeText}
        </p>


        {/* Social Links */}
        <div className="mt-8 mb-4 flex justify-self-start gap-8 text-2xl font-lora text-gray-700  ">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <RiTwitterXFill className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <CiInstagram className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
          </a>
          <a href="https://github.com/Souradeep321" target="_blank" rel="noopener noreferrer">
            <FaGithub className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
          </a>
        </div>

        {/* Card Container */}
        <HomeCard />



      </div>
    </section>
  );
}

export default Home;
