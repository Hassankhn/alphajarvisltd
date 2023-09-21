import React from 'react'
import Image from 'next/image'

const contactushome = () => {
  return (
    // Full section div
    <div className="relative w-full h-96">
    <Image 
        className="w-full h-96 top-0 left-0 object-cover"
        src='/images/night.jpg' 
        width={10000} 
        height={600}
        alt='Hero image'
    />
    <div className="absolute top-0 left-0 w-full h-96">
        <div className="bg-black opacity-50 w-full h-full" />
    </div>
    <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-white">
        <div className="pl-20 pr-20 ">
            <h1>Trusted by Millions around the globe</h1>
            <button className="rounded-full hover:bg-black font-bold ">Contactus Now</button>
        </div>
    </div>
</div>
  )
}

export default contactushome 
