import React from 'react';
import { Link } from "react-router-dom";
import NavLogoThree from "../assets/nav_three.png"

const NavThree = () => {
    return (
        <div className="relativ min-h-screen flex">
            {/*mobile menu bar*/}
            {/*sidebar*/}
            <div className='bg-pink-200 text-gray-700 w-64'>
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
            <div className='flex-1 p-10 text-3xl font-bold hover:text-pink-500'>Nav 3 is a sidebar!</div>
        </div>
    )
}

export default NavThree