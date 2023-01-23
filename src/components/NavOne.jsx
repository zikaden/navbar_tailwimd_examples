import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NavLogoOne from "../assets/nav_one.png"
import Hamburgermenu from "../assets/nav_hamburgericon.png"


function NavOne() {
    //toggle for hamburgericon 
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <nav className='bg-gray-100 font-mono'>
                <div className="max-w-6xl mx-auto px-5">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/*logo*/}
                            <div className="flex items-center py-6 px-6 text-gray-700">
                                <img className="w-6 md:w-12 h-6 md:h-12" src={NavLogoOne} alt="NavLogoOne" />
                                <span className='text text-bold font-pacifico md:text-4xl'>Better Nav</span>
                            </div>
                            {/*primary nav*/}
                            <div className='hidden md:flex items-center space-x-4'>
                                <Link to={`/navtwo`}>
                                    <p className='py-6 px-6 text-gray-600 hover:text-gray-900'>Nav Two</p>
                                </Link>
                                <Link to={`/navthree`}>
                                    <p className="py-6 px-6 text-gray-600 hover:text-gray-900">Nav Three</p>
                                </Link>
                            </div>
                        </div>
                        {/*secondary nav*/}
                        <div className='hidden md:flex items-center space-x-4'>
                            <Link to={`/navtwo`}>
                                <p className='py-5 px-3'>Navbar 2</p>
                            </Link>
                            <Link to={`/navthree`}>
                                <p className="py-3 px-3 bg-yellow-300 hover:bg-yellow-100 text-yellow-700 hover:text-yellow-600 transistion duration-300 rounded text-bold">Navbar 3</p>
                            </Link>
                        </div>
                        {/*button for hamburger icon for mobile navigation*/}
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button" onClick={() => setToggle(!toggle)} >
                                <img className="h-5" src={Hamburgermenu} alt="Hamburgericon" />
                            </button>
                        </div>
                    </div>
                </div>
                {/*mobile menu*/}
                {toggle && (
                    <div className="mobile-menu text-center md:hidden">
                        <Link to={`/navtwo`}>
                            <p className='block text-base py-2 px-2 hover:bg-gray-600'>Nav Two</p>
                        </Link>
                        <Link to={`/navthree`}>
                            <p className="block text-base py-2 px-2 hover:bg-gray-600">Nav Three</p>
                        </Link>
                    </div>
                )}
            </nav>
            <div className='text-center py-32'>
                <div className='text-serif md:text-7xl sm:text-3xl'>Navbar One using Tailwind css!</div>
            </div>
        </div>
    )
}


export default NavOne