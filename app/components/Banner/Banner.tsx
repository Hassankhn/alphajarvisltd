'use client'
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Your trusted Supply Platform.",
      "Providing best user experience for customers.",
      "Delivery on time in demand.",
      "Tested and trusted by millions"
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full releative h-screen bg-banner-bg bg-center bg-cover '>
        <div className='w-full h-full inset-0 bg-black/70'>
          <div className='max-w-screen-2xl text-white h-screen mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-5xl uppercase font-bold '><span className='p-1 text-yellow-400'>Alpha Jarvis</span> Here baby whats up</h1>
            <p className='text-base md:text-lg font-semibold mt-2'>{text}<Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" /></p>
          </div>
        </div>
        </div>
  )
}

export default Banner
