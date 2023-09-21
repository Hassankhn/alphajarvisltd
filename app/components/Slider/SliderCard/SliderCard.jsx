'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SliderCard = ({ el, i }) => {
  return (
    <motion.div className="p-4">
      <div className="pb-4 rounded-3xl transition-all duration-300 ease-in shadow-md shadow-cyan/70 hover:shadow-xl hover:shadow-black/70">
        <motion.div className="sliderCard_box_img">
          <Image
            src={el.background}
            className="rounded-tl-2xl rounded-tr-2xl"
            alt="slider profile"
            width={500}
            height={300}
            objectFit="cover"
          />
        </motion.div>
        <div className="flex flex-col items-center px-2 justify-between">
          <p className="font-extrabold text-xl mt-1">{el.title}</p>
          <p className="text-md text-justify">{el.service}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
