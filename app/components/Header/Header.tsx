import Image from "next/image"

const HeaderS = () => {
    return (
        <div className="w-full h-screen">
        <Image 
        className="w-full h-screen top-0 left-0 object-cover"
        src='/images/night.jpg' 
        width={10000} 
        height={1000}
        alt='Hero image'/>
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"/>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
            <div className=" pl-20 pr-20">
                <p className=" line-height-0">Supply firm</p>
                <h1 className="top-0 line-height-0">Alpha Jarvis ltd</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia accusantium unde, illum dolorem, quod aliquid quasi dicta libero beatae, cum rerum consectetur corrupti eligendi?</p>
                <button className="rounded-full hover:bg-black font-bold">Explore Now</button>
            </div>
        </div>
      </div>
  )
}

export default HeaderS
