import React, { useState } from 'react'

// import icon
import logo from '../assets/logo.svg'
import hamMenu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import arrowDown from '../assets/icon-arrow-down.svg'
import arrowUp from '../assets/icon-arrow-up.svg'
import todo from '../assets/icon-todo.svg'
import calendar from '../assets/icon-calendar.svg'
import reminder from '../assets/icon-reminders.svg'
import plan from '../assets/icon-planning.svg'

const features = [
    {
        name:'Todo List',
        src:todo,
        alt:'todo-icon'
    },
    {
        name:'Calender',
        src:calendar,
        alt:'calendar-icon'
    },
    {
        name:'Reminders',
        src:reminder,
        alt:'reminder-icon'
    },
    {
        name:'Planning',
        src:plan,
        alt:'plan-icon'
    },
];

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [menuOne,setMenuOne] = useState(false);
    const [menuTwo,setMenuTwo] = useState(false);

    const handleMenuOne = () =>{
        setMenuTwo(false);
        setMenuOne(!menuOne)
    }
    const handleMenuTwo = () =>{
        setMenuOne(false);
        setMenuTwo(!menuTwo)
    }
  return (
    <div className='p-5 flex items-center justify-between'>
        <div className='flex items-center gap-10'>
            <div>
                <img src={logo} alt="logo-icon" />             
            </div>
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-7 relative'>
                    <li className='flex items-center gap-2' onClick={handleMenuOne}>
                        <a className='text-gray hover:text-black' href="#"> Features </a>
                        {menuOne ? ( <img src={arrowDown} alt='arrow-down'/> ):(<img src={arrowUp} alt='arrow-up'/>)}
                    </li>
                    {/* FEATURES DROPDOWN MENU */}
                    {menuOne && (
                        <div className='absolute -bottom-[220px] -left-[90px] bg-white rounded-md shadow-xl px-7 py-3'>
                            {features.map((link)=>(
                                <a href='#' className='flex items-center text-gray my-3 gap-4' key={link.name} >
                                    <img src={link.src} alt={link.alt} />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    )}
                    <li className='flex items-center gap-2' onClick={handleMenuTwo}>
                        <a className='text-gray hover:text-black' href="#"> Company </a>
                        {menuTwo ? ( <img src={arrowDown} alt='arrow-down'/> ):(<img src={arrowUp} alt='arrow-up'/>)}
                    </li>
                    {/* COMPANY DROPDOWN MENU */}
                    {menuTwo && (
                        <ul className='absolute -bottom-[170px] left-[130px] bg-white rounded-md shadow-xl p-5'>
                            <li className='mb-3'><a className=' text-gray' href="#">History</a></li>
                            <li className='mb-3'><a className=' text-gray' href="#">Our Team</a></li>
                            <li ><a className=' text-gray' href="#">Blog</a></li>
                        </ul>
                    )}
                    <li><a className='text-gray hover:text-black' href="#"> Careers </a></li>
                    <li><a className='text-gray hover:text-black' href="#"> About </a></li>
                </ul>
            </nav>
        </div>
        <div className='hidden md:block'>
            <div className='flex items-center gap-5'>
                <a className='text-gray hover:text-black' href="#">Login</a>
                <a className='text-gray border-[3px] px-5 py-3 rounded-xl hover:text-black hover:border-black' href="#">Register</a>
            </div>
        </div>
        {/* HAMBURGER MENU */}
        <div className='md:hidden hover:cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
            <img src={hamMenu} alt="hamburger-menu" />
        </div>
        {/* MOBILE MENU */}
        {isOpen && (
            <nav className='w-[70%] h-screen absolute top-0 right-0 z-[99] bg-white px-5 shadow-lg'>
                {/* CLOSE ICON */}
                <div className='absolute top-6 right-6 hover:cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                    <img src={close} alt="close-icon" />
                </div>
                <ul className='mt-20  flex flex-col h-auto'>
                    <li className='mb-3 flex items-center gap-2' onClick={()=>setMenuOne(!menuOne)}>
                        <a className='text-gray hover:text-black' href="#"> Features </a>
                        {menuOne ? ( <img src={arrowDown} alt='arrow-down'/> ):(<img src={arrowUp} alt='arrow-up'/>)}
                    </li>
                    {/* FEATURES DROPDOWN MENU */}
                    {menuOne && (
                        <div className='mb-3 flex flex-col pl-7'>
                            {features.map((link)=>(
                                <a href='#' className='flex items-center text-gray my-2 gap-4' key={link.name} >
                                    <img src={link.src} alt={link.alt} />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    )}
                    <li className='mb-3 flex items-center gap-2' onClick={()=>setMenuTwo(!menuTwo)}>
                        <a className='text-gray hover:text-black' href="#"> Company </a>
                        {menuTwo ? ( <img src={arrowDown} alt='arrow-down'/> ):(<img src={arrowUp} alt='arrow-up'/>)}
                    </li>
                    {/* COMPANY DROPDOWN MENU */}
                    {menuTwo && (
                        <ul className='mb-3 flex flex-col pl-7'>
                            <li className='my-2'><a className=' text-gray' href="#">History</a></li>
                            <li className='my-2'><a className=' text-gray' href="#">Our Team</a></li>
                            <li className='my-2'><a className=' text-gray' href="#">Blog</a></li>
                        </ul>
                    )}
                    <li className='mb-3'><a className=' text-gray hover:text-black' href="#"> Careers </a></li>
                    <li className='mb-3'><a className=' text-gray hover:text-black' href="#"> About </a></li>
                </ul>
                <div className='flex flex-col items-center gap-5'>
                    <a className='text-gray hover:text-black' href="#">Login</a>
                    <a className='text-gray border-[3px] w-full py-3 flex justify-center rounded-xl hover:text-black hover:border-black' href="#">Register</a>
                </div>
            </nav>
        )}
        {/* OVERLAY */}
        <div className={` ${isOpen ? 'block':'hidden'} absolute top-0 right-0 z-10 h-screen w-screen bg-black bg-opacity-50`} />
    </div>
  )
}

export default Navbar