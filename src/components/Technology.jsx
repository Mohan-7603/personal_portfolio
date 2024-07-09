import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Js from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import Spring from '../assets/spring.png';
import Springboot from '../assets/springboot.png';
import Mysql from '../assets/mysql.png';
import Github from '../assets/github.png';
import Kotlin from '../assets/kotlin-logo.png';
import Firebase from '../assets/firebase.png';
import Pg from '../assets/pg.jpeg';
import Statix from '../assets/removebg.png';

const Technology = () => {
  const tech = [
    {
      id: 1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: Css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: Js,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: ReactImg,
      title: 'React',
      style: 'shadow-cyan-400',
    },
    {
      id: 5,
      src: Tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: Java,
      title: 'Java',
      style: 'shadow-red-600',
    },
    {
      id: 7,
      src: Spring,
      title: 'Spring',
      style: 'shadow-green-500',
    },
    {
      id: 8,
      src: Springboot,
      title: 'SpringBoot',
      style: 'shadow-green-500',
    },
    {
      id: 9,
      src: Mysql,
      title: 'MySql',
      style: 'shadow-sky-700',
    },
    {
      id: 10,
      src: Github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
    {
      id: 11,
      src: Kotlin,
      title: 'Kotlin',
      style: 'shadow-indigo-500',
    },
    {
      id: 12,
      src: Firebase,
      title: 'Firebase',
      style: 'shadow-amber-500',
    },
  ];

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full py-12'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold mb-4 text-center'>Experience</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 text-center'>
            <div className='flex flex-wrap justify-center sm:justify-start'>
                {tech.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full ${style} m-2 w-24 h-24 flex items-center justify-center`}>
                    <img src={src} alt={title} className='w-16 h-16 object-contain' />
                </div>
                ))}
            </div>
            <div className='text-center sm:text-left mt-8 sm:mt-0 col-span-2 md:col-span-1 '>
                <div className='flex flex-col md:flex-row md:items-center hover:scale-105 duration-500 m-4 py-6 px-8 rounded-lg bg-gradient-to-r from-gray-700 to-gray-950'>
                    <img src={Statix} alt="Company Logo" className='object-cover h-12 w-34 mb-4 md:mb-0 md:mr-8'/>
                    <div>
                        <h2 className='font-bold text-base text-white '>Web Developer, Statix.Pro</h2>
                        <p className='text-sm font-extralight text-gray-300'>
                        Oct,2023 - Dec,2023 
                        </p>
                        <li className='text-sm list-none'>I Developed an email automation system using the MERN stack.
                        Implemented functionality to send bulk emails and track email statuses</li>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center hover:scale-105 duration-500 m-4 py-6 px-8 rounded-lg bg-gradient-to-r from-gray-700 to-gray-950'>
                    <img src={Pg} alt="Company Logo" className='object-cover h-12 w-12 mb-4 md:mb-0 md:mr-8'/>
                    <div>
                        <h2 className='font-bold text-base text-white '>Mobile App Developer, PG Softwares</h2>
                        <p className='text-sm font-extralight text-gray-300'>
                        Apr,2023 - May,2023 
                        </p>
                        <li className='text-sm list-none'>Developed a feature-rich mobile application using Kotlin, aimed at
                            revolutionizing user engagement and communication within the organization. </li>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
