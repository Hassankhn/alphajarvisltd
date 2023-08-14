import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image 
      className='w-screen h-screen '
      src='/images/maintenance-page.png' 
      alt='maintaince' width={1000} height={1000} /> 
    </div>
  )
}
