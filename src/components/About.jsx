import React from 'react';
import Appdesign from '../assets/app-design.png';
import Webdesign from '../assets/website-design.png';

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold pt-12 mb-4 text-center'>What I Do</p>
        </div>
        <p className='text-base font-extralight px-4 md:px-8 text-center max-w-[53rem] mx-auto'>
          I'm a passionate and innovative full stack developer dedicated to crafting 
          exceptional responsive websites and mobile applications.
          With a keen eye for design and a relentless drive for excellence, 
          I transform ideas into stunning digital experiences. Let's collaborate 
          and bring your vision to life with creativity and precision. 
          Together, we can create something truly amazing!
        </p>
        <br />
        <div className='m-6 w-full max-w-[80%] mx-auto'>
          <div className='flex flex-col md:flex-row md:items-center m-4 py-6 px-8 rounded-lg bg-gray-800'>
            <img src={Webdesign} alt="Web Design" className='object-cover h-12 w-12 mb-4 md:mb-0 md:mr-8'/>
            <div>
              <h2 className='font-bold text-2xl text-white mb-2'>Website Development</h2>
              <p className='text-base font-extralight text-gray-300'>
                Specializing in creating captivating and user-friendly websites that blend aesthetics with functionality. 
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:items-center m-4 py-6 px-8 rounded-lg bg-gray-800'>
            <img src={Appdesign} alt="App Design" className='object-cover h-12 w-12 mb-4 md:mb-0 md:mr-8'/>
            <div>
              <h2 className='font-bold text-2xl text-white mb-2'>App Development</h2>
              <p className='text-base font-extralight text-gray-300'>
                Passionate about designing intuitive mobile applications that prioritize user engagement and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
