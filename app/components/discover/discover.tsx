import React from 'react'

const Discover = () => {
  return (
    <div className='mt-6 w-full  bg-slate-100 shadow-sm'>
      <div className='grid grid-cols-1 w-4/5 mx-24 py-28 md:grid-cols-2 gap-4 items-center'>
        <div>
            <h1 className='text-4xl'>Enabling the HONG KONG Innovation</h1>
            <p className='font-bold mt-4'>DISCOVER SOLUTIONS →</p>
        </div>
        <div>
            <p className="discover-text  shadow-black/30 hover:shadow-xl hover:shadow-black/60 hover:rounded-md hover:p-2">Discovering new ways to innovate and grow your business. INNOVATION
            Our team is dedicated to helping our customers ensure they are realizing the greatest value from their technology investment. 
            <br/>
            We offer design automation software, additive manufacturing solutions, 3D metrology and scanning technology and professional services, as well as training and consultation to help our clients innovate, disrupt, design, and succeed</p>
        </div>
      </div>
    </div>
  )
}

export default Discover
