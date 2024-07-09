import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav,setNav] = useState(false);
    const [activeLink,setActiveLink] = useState('');

    const links = [
        {
            id : 1,
            link : 'home',
        },
        {
            id : 2,
            link : 'about',
        },
        {
            id : 3,
            link : 'projects',
        },
        {
            id : 4,
            link : 'experience',
        },
        {
            id : 5,
            link : 'contact',
        },
    ];

    const handleActiveLink = (link) => {
        setActiveLink(link);
    }
    
  return (
    <div className='flex justify-between items-center z-50 w-full h-20 bg-black px-4 text-white fixed'>
        <div>
            <h1 className='text-4xl ml-2 font-signature'>Mohanraj</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, link}) =>(
                <li 
                    key = {id} 
                    className={`px-4 cursor-pointer capitalize font-medium ${activeLink === link ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 hover:underline underline-offset-8 decoration-blue-500 hover:scale-105 duration-200`}>
                    <Link to={link} smooth duration={500} spy = {true} onSetActive={() => handleActiveLink(link)}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b  from-black to-gray-800 text-gray-500 '>
                {links.map(({id, link}) =>(
                    <li 
                        key = {id} 
                        className='px-4 capitalize cursor-pointer py-6 text-4xl hover:text-blue-500 hover:scale-105 duration-200'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default NavBar
