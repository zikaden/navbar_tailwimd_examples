import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NavLogoThree from "../assets/nav_three.png"
import Hamburgericon from "../assets/nav_hamburgericon.png"

const NavThree = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="relativ min-h-screen md:flex">
            {/*mobile menu bar*/}
            <div className="p-5 bg-pink-200 flex justify-between md:hidden">
                <div className="flex items-center space-x-4">
                    <img className="w-6 md:w-12 h-6 md:h-12" src={NavLogoThree} alt="NavLogoThree" />
                    <span className=' text-gray-700 font-bold font-sofiasans'>Nav Mobile</span>
                </div>
                {/*hamburger icon for mobile navigation*/}
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={() => setToggle(!toggle)} >
                        <img className="h-4" src={Hamburgericon} alt="Hamburgericon" />
                    </button>
                </div>
            </div>
            {/*mobile menu*/}
            {toggle && (
                <div className="absolute inset-0 bg-pink-100 flex md:hidden ">
                    <div className="mobile-menu m-auto text-center flex flex-col space-y-5">
                        <div className=" bg-pink-500 px-10 skew-x-3 transform -scale-x-100 shadow ">
                            <Link to={`/`}>
                                <p className=" transform -scale-x-100 text-white text-xl font-bold">Nav 01</p>
                            </Link>
                        </div>
                        <div className=" bg-pink-500 px-10 skew-x-3 transform -scale-x-100 shadow ">
                            <Link to={`/navtwo`}>
                                <p className=" transform -scale-x-100 text-white text-xl font-bold">Nav 02</p>
                            </Link>
                        </div>
                    </div>
                </div>
            )
            }
            {/*sidebar*/}
            <div className=' bg-pink-200 text-gray-700 w-64 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
                {/*logo*/}
                <div className="flex items-center py-6 px-6 text-gray-700">
                    <img className="w-6 md:w-12 h-6 md:h-12" src={NavLogoThree} alt="NavLogoThree" />
                    <span className='text text-bold font-sofiasans md:text-4xl'>Nav Sidebar</span>
                </div>
                {/*navbar*/}
                <nav>
                    <Link to={`/`}>
                        <p className='py-6 px-6 text-3xl text-gray-700 hover:text-white  hover:bg-pink-500'>Nav 01</p>
                    </Link>
                    <Link to={`/navtwo`}>
                        <p className="py-6 px-6 text-3xl text-gray-700 hover:text-white hover:bg-pink-500">Nav 02</p>
                    </Link>
                </nav>
            </div>
            {/*content*/}
            <div className='flex-1 p-10 text-3xl font-bold hover:text-pink-500'>This navbar is responsive!</div>
        </div >
    )
}

export default NavThree