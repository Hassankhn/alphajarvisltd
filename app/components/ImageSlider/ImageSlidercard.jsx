import React from 'react'
import Image from 'next/image'
const ImageSlidercard = ({el}) => {
  return (
    <div className='w-2/5 h-48'>
        <Image 
        className='w-1/5 h-48 rounded-md'
        src={el.image}
        objectFit="cover"
        width={400}
        height={500}
        alt='services'
        />
    </div>
  )
}
export default ImageSlidercard