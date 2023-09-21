import Image from 'next/image'
import Discover from './components/discover/discover'
import Banner from './components/Banner/Banner'
import Slider from './components/Slider/Slider'
import AboutusComponent from './components/Homecomponents/AboutusComponent'
import Contact from './contactus/page'
import ImageSlider from './components/ImageSlider/ImageSlider'
export default function Home() {
  return (
    <div>
      <Banner />
      <Slider />
      <Discover />
      <AboutusComponent />
      {/* <ImageSlider /> */}
      <Contact />
      
      {/* <AboutusComponent /> */}
      {/* <div className='flex justify-center item-center' > */}
      {/* <Image 
      // className=' '
      src='/images/maintenance-page.png' 
      alt='maintaince' width={600} height={600} /> 
      </div> */}
    </div>
  )
}
