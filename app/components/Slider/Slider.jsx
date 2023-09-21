"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//INTERNAL IMPORT
import SliderCard from "./SliderCard/SliderCard";

const Slider = () => {
  const FollowingArray = [
    {
      background: "/assets/images/night.jpg",
      title: "Customized Machinery",
      service:
        " AlphaJarvisltd specializes in sourcing tailor-made machinery solutions. As dedicated suppliers, we connect businesses with customized machinery, meticulously selected from our global network of manufacturers. Enhance operational efficiency with machinery tailored to your requirements, sourced and delivered by AlphaJarvisltd. Your bespoke machinery solution partner, streamlining your supply chain.",
    },
    {
      background: "/assets/images/firm1.jpg",
      title: "Automation SOlution",
      service:
        " AlphaJarvisltd pioneers in delivering cutting-edge automation solutions that revolutionize your business processes. As industry experts, we provide end-to-end automation strategies tailored to your needs. Harness the power of technology to increase efficiency, reduce errors, and elevate productivity. With AlphaJarvisltd as your partner, embrace the future of automation and transform your operations with smart, seamless solutions.",
    },
    {
      background: "/assets/images/firm2.jpg",
      title: "Mechninacal tools and equipment",
      service:
        " AlphaJarvisltd is your trusted global source for a wide range of mechanical tools and equipment. As dedicated suppliers, we provide businesses with top-quality tools and machinery to support diverse applications. From precision instruments to heavy-duty equipment, our comprehensive selection ensures your operational needs are met with efficiency and reliability. Count on AlphaJarvisltd for streamlined procurement of mechanical tools and equipment that drive your success.",
    },
    {
      background: "/assets/images/firm3.jpg",
      title: "Electrical and Electronic Components",
      service:
        " AlphaJarvisltd serves as your premier partner for sourcing and distributing high-quality electrical and electronic components globally. With an expansive inventory, we provide businesses with reliable access to a diverse range of components for various applications. From connectors to circuitry, trust AlphaJarvisltd to deliver the components you need to power innovation and drive technological advancement.",
    },
    {
      background: "/assets/images/firm2.jpg",
      title: "Indystrial Components",
      service:
        " AlphaJarvisltd specializes in sourcing and supplying a comprehensive range of industrial components. As your dedicated partner, we connect businesses with essential components required for seamless operations across industries. From machinery parts to specialized components, trust AlphaJarvisltd to deliver reliable solutions that ensure your production lines run smoothly and efficiently. Experience hassle-free procurement and dependable performance with our industrial component expertise.",
    },
    {
      background: "/assets/images/Beachside.jpg",
      title: "precision machine components",
      service:
        " AlphaJarvisltd excels in providing precision machine components tailored to your exact specifications. As an expert supplier, we ensure your machinery operates at the highest levels of accuracy and reliability. From intricate parts to specialized components, our precision solutions enhance the performance of your equipment, contributing to seamless production processes. Rely on AlphaJarvisltd for sourcing and delivering precision machine components that elevate your operational precision.",
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, []);
  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full mt-8 bg-cyan/40">
      <div className="w-11/12 m-auto pb-8 -pr-1">
        <h2 className="text-4xl md:text-2xl text-center lg:text-5xl">
          What we Offer
        </h2>
        <div className="flex justify-between items-center">
          <p className=" mx-auto">We provide top-notch services tested and trusted by users around the globe</p>
        </div>

        <motion.div
          className="w-full overflow-hidden"
          ref={dragSlider}
          drag="x" // Apply the drag property here
          dragConstraints={{ right: 0, left: -width }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-2 py-16 px-8 lg:gap-2 md:px-0 cursor-grab">
            {FollowingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
