import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brainwave } from '../assets/assets';
import { navigation } from '../constant';
import MenuSvg from '../assets/assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import Button from './Button';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
function Navbar() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const location = useLocation();

    const handleToggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };

    // Scroll to the element based on the hash in the URL
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 custom-cursor border-b border-n-6 lg:backdrop-blur-sm
            lg:bg-slate-700 ${openNavigation ? 'bg-slate-800' : 'bg-n-8/80 backdrop-blur-sm'}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="w-[15rem] block" href="#hero">
                    <h1 className='font-extrabold xl:text-4xl custom-cursor2 lg:text-4xl md:text-3xl text-2xl  '>Musharaf Dev</h1>
                </a>

                <nav className={`${openNavigation ? 'flex ' : 'hidden'} fixed top-[5rem] left-0 right-0 lg:static lg:flex lg:mx-auto lg:bg-transparent bg-n-8`}>
                    <div className="flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            item.url.startsWith("#") ? (
                                // If the URL is a hash link, scroll to the section instead of reloading
                                <a
                                    key={item.id}
                                    href={item.url}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick();
                                        const element = document.querySelector(item.url);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className={`block relative font-code  uppercase text-2xl text-n-1 hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''}
                                    px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'text-n-1/50'} lg:leading-5 xl:px-12 hover:text-n-1`}
                                >
                                    <p className='custom-cursor2'>{item.title}</p>
                                </a>
                            ) : (
                                // Use Link for regular routing
                                <Link
                                    key={item.id}
                                    to={item.url}
                                    onClick={handleClick}
                                    className={`block relative font-code custom-cursor2 uppercase text-2xl text-n-1 hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''}
                                    px-6 py-6 md:py-8 lg:text-xs lg:font-semibold custom-cursor2 ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'text-n-1/50'} lg:leading-5 xl:px-12 hover:text-n-1`}
                                >
                                   <div className='custom-cursor2'>
                                   {item.title}
                                   </div>
                                </Link>
                            )
                        ))}
                        <HamburgerMenu />
                    </div>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/musharafhussain1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full custom-cursor2 bg-gray-800 hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
                    >
                        <FaLinkedinIn size={35} className="text-white" />
                    </a>

                    <a
                        href="https://github.com/musharafgujjar7711/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full custom-cursor2 bg-gray-800 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1"
                    >
                        <FaGithub size={35} className="text-white" />
                    </a>
                </div>

                <Button className="lg:hidden ml-auto" onClick={handleToggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
}

export default Navbar;




