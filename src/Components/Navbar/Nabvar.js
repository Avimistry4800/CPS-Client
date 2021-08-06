import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/image/SpaceX-Logo.svg';

const Nabvar = () => {
    return (
        <header className="text-white body-font">
            <div className="flex justify-evenly  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font text-7xl font-bold items-center  text-white mb-4 md:mb-0">
                    CPS

                </a>
                <nav className="ml-auto md:ml-4 md:py-1 md:pl-4  flex flex-wrap items-center text-base justify-center">
                    <Link to="/dashboard" className="mr-5 text-red-500  hover:text-hoverNav">ABOUT</Link>
                    <a className="mr-5 text-gray-500 hover:text-hoverNav border-l-2 pl-6 border-gray-400">PROJECTS</a>
                    <a className="mr-5 hover:text-hoverNav border-l-2 pl-6 border-gray-400">SERVICES</a>
                    <a className="mr-5 hover:text-hoverNav border-l-2 pl-6 border-gray-400">CART</a>
                    <a className="mr-5 hover:text-hoverNav border-l-2 pl-6 border-gray-400">DASHBOARD</a>
                    <a className="mr-5 hover:text-hoverNav border-l-2 pl-6 border-gray-400">CONTACT</a>
                </nav>
            </div>
        </header>
    );
};

export default Nabvar;