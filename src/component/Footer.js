import React from 'react'
import '../../styles/Footer.css'
import { BiChevronRight } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerFirstSection'>
                <h2>NEPHARA</h2>
                <section className='footerBody' >
                    <section className='footerLinks'>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Gallery</li>
                            <li>About Us</li>
                            <li>My Account</li>
                        </ul>
                    </section>


                </section>
                <section className='footerSocials'>
                    <p>Sign up to our email newsletter</p>
                    <div className='footerSocialsInput'>
                        <input type='text' placeholder='Enter your email' />
                        <button><BiChevronRight /> </button>
                    </div>
                    <div className='footerSocialsSocialLinks'>
                        <ul>
                            <li> <BsFacebook /> </li>
                            <li> <BsInstagram /> </li>
                            <li> <BsYoutube /> </li>
                            <li> <BsTiktok /> </li>
                        </ul>

                    </div>
                </section>
            </div>
            <div className='footerSecondSection'>
                <section className='footerBottom'>
                    <p>©2023 NEPHARA.All rights reserved.</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Terms and Condition</li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer