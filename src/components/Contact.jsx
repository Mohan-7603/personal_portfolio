import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold mb-4 text-center'>Contact</p>
            <p className='text-base font-extralight px-4 md:px-8 text-center max-w-[53rem] mx-auto'>Submit the form below to get in touch wih me</p>
        </div>

        <div className='flex justify-center items-center pt-5'>
            <form action="https://getform.io/f/aejyypdb" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input 
                    type="text" 
                    name='name' 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <input 
                    type="email" 
                    name='email' 
                    placeholder='Enter your email address'  
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <textarea 
                    name="message" 
                    rows='10' 
                    placeholder='Enter your message'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
