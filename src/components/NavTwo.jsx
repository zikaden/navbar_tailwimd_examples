import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NavLogoTwo from "../assets/nav_two.png"
import HamburgermenuWhite from "../assets/nav_hamburgericon_white.png"

const NavTwo = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <nav>
                <div className='w-full bg-blue-300'>
                    <div className="max-w-6xl mx-auto px-5">
                        <div className="flex justify-between">
                            {/*logo*/}
                            <div className="flex space-x-4 py-3 px-3 items-center ">
                                <img className="w-6 md:w-12 h-6 md:h-12" src={NavLogoTwo} alt="NavLogoOne" />
                                <span className='text text-bold font-fredoka text-white md:text-4xl'>Nav No.2</span>
                            </div>
                            {/*menu*/}
                            <div className='hidden md:flex items-center space-x-4'>
                                <Link to={`/`}>
                                    <p className='text-white text-xl font-bold hover:text-blue-700 hover:underline underline-offset-8'>Navbar One</p>
                                </Link>
                                <Link to={`/navthree`}>
                                    <p className='text-white text-xl font-bold hover:text-blue-700 hover:underline underline-offset-8'>Navbar Three</p>
                                </Link>
                            </div>
                            {/*button for hamburger icon for mobile navigation*/}
                            <div className="md:hidden flex items-center">
                                <button className="mobile-menu-button" onClick={() => setToggle(!toggle)} >
                                    <img className="h-5" src={HamburgermenuWhite} alt="Hamburgericon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*mobile menu*/}
                {toggle && (
                    <div className="absolute inset-0 bg-blue-500 flex md:hidden ">
                        <div className="mobile-menu text-center m-auto flex flex-col space-y-10">
                            <Link to={`/`}>
                                <p className="text-white text-3xl font-bold py-3 px-3 bg-blue-700 shadow rounded">Nav One</p>
                            </Link>
                            <Link to={`/navthree`}>
                                <p className="text-white text-3xl font-bold py-3 px-3 bg-blue-700 shadow rounded">Nav Three</p>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <div className="hidden md:block">
                <div className="text-center py-32 text-blue-300 ">
                    <div className='text-serif md:text-7xl hover:text-blue-800'>Navbar Two using Tailwind css!</div>
                </div>
            </div>
        </div>
    )
}

export default NavTwo