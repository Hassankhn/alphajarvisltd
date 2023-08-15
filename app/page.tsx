import Image from 'next/image'
import NavBar from './components/Navbar/Navbar'
import Headers from './components/Header/Header'

export default function Home() {
  return (
    <div>
      {/* <NavBar />
      <Headers /> */}
      <div className='flex justify-center item-center' >
      <Image 
      // className=' '
      src='/images/maintenance-page.png' 
      alt='maintaince' width={600} height={600} /> 
      </div>
    </div>
  )
}
