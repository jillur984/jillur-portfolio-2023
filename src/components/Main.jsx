import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-left scale-x-1' src='https://cdn.pixabay.com/photo/2016/11/29/04/00/adventure-1867206_1280.jpg' alt='image'></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl font-bold text-yellow-500'>I'm JILLUR RAHMAN</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> I'm a 
             <TypeAnimation
       sequence={[
        // Same substring at the start will only be typed out once, initially
        ' React-JS Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Coder',
        2000,
        ' MERN Stack Engineer',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <FaTwitter className='cursor-pointer' size={20}/>
              <FaFacebook className='cursor-pointer' size={20}/>
              <FaInstagram className='cursor-pointer' size={20}/>
              <FaLinkedinIn className='cursor-pointer' size={20}/>
              
            </div>
          </div>
        </div>

    </div>
  )
}

export default Main