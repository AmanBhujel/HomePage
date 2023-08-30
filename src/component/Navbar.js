'use client'
import React, { useEffect, useRef, useState } from 'react'
import '../../styles/Navbar.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { HiBars4 } from "react-icons/hi2";
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY) {
                // Scrolling down, hide the navbar
                setHideNavbar(true);
                setIsSidebarOpen(false)
            } else {
                // Scrolling up, show the navbar
                setHideNavbar(false);
            }

            setPrevScrollY(currentScrollY);
        };

        // Clicking outside nav modal
        const mediaQuery = window.matchMedia("(max-width: 575px)");

        // Clicking outside nav modal
        const handleDocumentClick = (event) => {
            if (isSidebarOpen && mediaQuery.matches && !navRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };
    


        document.addEventListener('mousedown', handleDocumentClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleDocumentClick); // Remove the event listener when component unmounts
        };
    }, [prevScrollY]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className={`navbar ${hideNavbar ? 'hidden' : ''}`}>
                {/* <header c>lassName={`navbar ${isSidebarOpen ? 'sidebarOpen' : ''}`}> */}
                <h1>NEPHARA</h1>
                <nav className='navbarLinks'>
                    <ul>
                        <li>PRODUCTS</li>
                        <li>GALLERY</li>
                        <li>ABOUT US</li>
                        <li>MY ACCOUNT</li>
                    </ul>
                </nav>
                <div className='navbarRightSection'>
                    <i className='navbarCart'><AiOutlineShoppingCart /></i>
                    {
                        isSidebarOpen ?
                            <i className='navbarSidebarCross' onClick={toggleSidebar}>
                                <RxCross1 />
                            </i> :
                            <i className='navbarSidebarButton' onClick={toggleSidebar}>
                                <HiBars4 />
                            </i>

                    }

                </div>

            </header>
            {isSidebarOpen && (
                <div className='navbarSidebarNavigation' ref={navRef}>
                    <ul>
                        <li>Products</li>
                        <li>Gallery</li>
                        <li>About us</li>
                        <li>My Account</li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar