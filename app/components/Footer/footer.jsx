'use client'
import React from 'react'
import { MdEmail } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
  } from "react-icons/ti";
  import Link from "next/link";
  import { RiSendPlaneFill } from "react-icons/ri";

const footer = () => {
  return (
    <div className='w-full py-6 relative mt-1'>
        <hr className='black font-bold'/>
      <div className='mx-auto grid grid-cols-1 md:w-4/5 md:grid-cols-[1.5fr,1fr,1fr,2fr] items-start justify-between gap-12'>
        {/* Reach Us Section */}
        <div>
            <h3>
                Reach us
            </h3>

            <div className='flex flex-col gap-6 mt-8 pl-4 text-[1.2rem] '>
                <a >
                    <span className='flex gap-2 items-center '><BiSolidPhoneCall/>&nbsp;+852 5808 2131</span> 
                </a>

                <a>
                    <span className='flex gap-2 items-center'><MdEmail/>&nbsp; info@alphajarvisltd.com</span> 
               </a>

               <p>
               <span className='flex gap-2 '>< FaMapMarkerAlt className='text-2xl'/>Unit 1603, 16th Floor, The L. Plaza, 367 - 375 Queen's Road Central, Sheung Wan, Hong Kong</span> &nbsp; 
               </p>
            </div>

            {/* Social Media Icons*/}
            <div className='flex gap-2 text-3xl text-[#4C5773] shadow-box-shadow justify-center'>
            <a href="#" className='text-[#4C5773] hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in'>
              <TiSocialFacebook />
            </a>
            <a href="#" className='text-[#4C5773] hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in'>
              <TiSocialTwitter />
            </a>
            <a href="#" className='text-[#4C5773] hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in'>
              <TiSocialInstagram />
            </a>
          </div>

            </div>

            {/* Company Section */}
            <div>
                <h3>Company</h3>
                <div className=' flex flex-col no-underline mt-8 gap-6 text-[1.2rem] pl-4 black'>
                    <Link href='' className='no-underline  text-black  hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in'>About</Link>
                    <Link href='/contactus' className='no-underline  text-black  hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in'>Contact</Link>
                    <Link href='/privacy_policy' passHref={true} className='no-underline  text-black  hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in'>Privacy Policy</Link>
                    <Link href='https://www.linkedin.com/in/hassan-khan-a9419b249/' target='_blank' passHref={true} className='no-underline  text-black  hover:bg-slate-800 hover:rounded-md hover:p-2 hover:text-white transition-all duration-500 ease-in'>Developer</Link>
                </div>
            </div>

            {/* Services Section */}
            <div>
                <h3>Services</h3>
                <div className='flex flex-col no-underline mt-8 gap-3 text-[.8rem] pl-4 '>
                    <Link href='' className='no-underline  text-black'>Customized Machinery</Link>
                    <Link href='' className='no-underline  text-black'>Automation Solution</Link>
                    <Link href='' className='no-underline  text-black'>Mechanical tools & equipment</Link>
                    <Link href='' className='no-underline  text-black'>Electronic components</Link>
                    <Link href='' className='no-underline  text-black'>Industrial Components</Link>
                    <Link href='' className='no-underline  text-black'>Precision machine Components</Link>
                </div>
            </div>

            {/* Subscribe Box Section */}
            <div>
                <h3>Subscribe</h3>
            <div className='w-full flex justify-between items-center p-6 rounded-3xl mt-12 bg-[#4c5773] text-[#d3dae7]'>
                <input  
                className='text-[#d3dae7] placholder:text-[#d3dae7] bg-transparent border-none outline-none'
                 type="email" placeholder="Enter your email *" />
                <RiSendPlaneFill className='text-2xl cursor-pointer' />
          </div>
            </div>

      </div>
{/* Copyright section last */}
<div class="flex items-center justify-center m-3">
  <div>
    © 2023-2027 Copyright: Ozone networks.inc
  </div>
</div>
    </div>
  )
}

export default footer
