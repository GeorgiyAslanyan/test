'use client'
import React, { useEffect, useState } from 'react'

const Navbar = ({setIsModalOpen}) => {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const [isDe, setIsDe] = useState(true)

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={`transition-all ease-linear duration-200 fixed  flex rounded-[32px] justify-between px-10 items-center z-40 ${scrollY > 750 ? ' backdrop-blur-lg bg-[#030712] w-[90%] bg-opacity-70 mt-5 py-5' : 'w-full py-[50px] '}` }>
        <img src='/navbar/logo.svg' alt='logo'/>
        <div className='flex gap-10'>
            <a href="#about">About us</a>
            <a href="#compaigns">Compaigns</a>
            <a href="#partners">Partners</a>
            <a href="#contacts">Contacts</a>
        </div>
        <div className='flex gap-2 max-h-12'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`relative cursor-pointer rounded-2xl px-[14px] flex gap-3 py-3 items-center ${scrollY <= 750 && "border border-gray-500"}`}>
                <img src={isDe ? '/navbar/de.svg' : '/navbar/en.svg'} alt="activeLang" />
                <p>{isDe ? 'De' : 'En'}</p>
                <img src="/accordion/arrow.svg" className={`transition-all duration-150 ease-linear ${!isOpen && 'rotate-180'}`} alt="arrow" />
                {isOpen && <div className='absolute w-full left-0 bottom-0 bg-white rounded-2xl translate-y-[110%]'>
                    <button onClick={() => setIsDe(true)} className='grid border-b gap-3 border-gray-200 grid-cols-3 items-center px-3 py-4'>
                        <img src="/navbar/de.svg" alt="de" />
                        <p className='text-gray-950'>De</p>
                    </button>
                    <button onClick={() => setIsDe(false)} className='grid grid-cols-3 gap-3 items-center px-3 py-4'>
                        <img src="/navbar/en.svg" alt="en" />
                        <p className='text-gray-950'>En</p>
                    </button>
                </div>}
            </div>
            <button onClick={() => setIsModalOpen(true)} className='bg-blue-600 rounded-2xl px-[14px] py-3'>Contact us</button>
        </div>
    </div>
  )
}

export default Navbar