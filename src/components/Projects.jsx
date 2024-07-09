import React from 'react'
import Amazon from '../assets/amazon.png'
import Ecommerce from '../assets/Ecommerce.png'
import Crud from '../assets/crud.png'
import Text from '../assets/text.png'
import Medical from '../assets/medical.png'
    
const Projects = () => {

    const project = [
        {
            id : 1,
            src : Amazon,
            link : 'https://github.com/Mohan-7603/Amazon_Static_Clone',
            title : 'Static Amazon Clone',
        },
        {
            id : 2,
            src : Ecommerce,
            link : 'https://github.com/Mohan-7603/Ecommerce_sample',
            title : 'Ecommerce Application',
        },
        {
            id : 3,
            src : Crud,
            link : 'https://github.com/Mohan-7603/CRUD-spring',
            title : 'User Mangagement System',
        },
        {
            id : 4,
            src : Text,
            link : 'https://github.com/Mohan-7603/TextConverter',
            demo : 'https://mohan-7603.github.io/TextConverter/',
            title : 'Text Converter',
        },
        {
            id : 5,
            src : Medical,
            link : 'https://github.com/Mohan-7603/Medical-Consultancy',
            title : 'Medica Consultancy Website',
        },
    ]
  return (
    <div name = "projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold pt-12 mb-4 text-center'>Projects</p>
            <p className='text-base font-extralight px-4 md:px-8 text-center max-w-[53rem] mx-auto'>
                Check out of some of my works
            </p>
        </div>
        <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-8 px-12 py-8 sm:px-0'>
            {project.map(({id,src,link,demo,title}) => (
                <div key = {id} className='shadow-md duration-200 hover:scale-105 shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md w-full'/>
                    <div className='flex items-center justify-center font-semibold p-4'>
                        <p>{title}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        {demo &&
                            <a href = {demo} className='w-1/2 px-6 mb-4 hover:text-blue-500 duration-200 hover:scale-105 cursor-pointer' target='_blank'>Demo</a>
                        }
                        <a href = {link} className='w-2/2 px-6 mb-4 hover:text-blue-500 duration-200 hover:scale-105' target='_blank'>code</a>
                    </div>
                </div>
            ))}
        </div> 
      </div>
    </div>
  )
}

export default Projects
