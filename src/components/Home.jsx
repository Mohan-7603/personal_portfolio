import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll';
import HeroImage from '../assets/heroImage.png'

const Home = () => {
  return (
    <div name = "home" className='h-screen relative z-10 text-white w-full bg-gradient-to-b from-black via-black to-gray-800'>
       <div className='w-full h-screen lg:p-40 p-12 font-bold flex flex-col justify-center '>
            <span className='text-2xl font-thin mt-36 mb-4'>Hello,</span>
            <span className='text-4xl mb-4'>I'm 
                <span className='text-blue-500 ml-5'>Mohanraj</span>
                <br />
                <span className='block mt-4'>
                    Full Stack Developer
                </span>
            </span>
            <p className='text-lg font-thin mb-4'>I'm a passionate and innovative full stack developer<br/> dedicated to crafting exceptional responsive websites<br/> and mobile applications.</p>
            <Link to='projects' smooth duration={500} className='group font-medium text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer'>
                Projects
                <span className='group-hover:rotate-90 duration-300 mb-0.5 ml-1'>
                    <MdOutlineKeyboardArrowRight size={25}/>
                </span>
            </Link>
                <img src={HeroImage} alt="" className='absolute right-0 object-cover h-screen opacity-20 lg:opacity-100'  style={{zIndex : '-1',top : '5rem'}} />
        </div>
    </div>
  )
}

export default Home

