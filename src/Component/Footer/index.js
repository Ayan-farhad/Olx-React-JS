import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";
import { LiaInstagram } from "react-icons/lia";

const Footer = () => {

    return (

        <>
            <footer className="main-footer">
                <div className="footer-section1">
                    <h3 className="spacing-h3" >POPULAR CATEGORIES</h3>
                    <ul>
                        <li><a>Cars</a></li>
                        <li><a>Flats for rent</a></li>
                        <li><a>Mobile Phones</a></li>
                        <li><a>Jobs</a></li>
                    </ul>
                </div>

                <div className="footer-section2">
                    <h3 className="spacing-h3" >TRENDING SEARCHES</h3>
                    <ul>
                        <li><a>Bikes</a></li>
                        <li><a>Watches</a></li>
                        <li><a>Books</a></li>
                        <li><a>Dogs</a></li>
                    </ul>
                </div>

                <div className="footer-section3">
                    <h3 className="spacing-h3" >ABOUT US</h3>
                    <ul>
                        <li><a>About </a></li>
                        <li><a>OLX Blog</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>OLX </a></li>
                    </ul>
                </div>

                <div className="footer-section4">
                    <h3 className="spacing-h3" >OLX</h3>
                    <ul>
                        <li><a>Help</a></li>
                        <li><a>Sitemap</a></li>
                        <li><a>Terms of use</a></li>
                        <li><a>Privacy </a></li>
                    </ul>
                </div>
                <div className="footer-section5">
                    <ul>
                        <li><h3 className='icon-style'>Follow us</h3></li>
                        <li> <AiFillTwitterCircle className='icon-style' />
                            <FaRegCirclePlay className='icon-style' />
                            <LiaInstagram className='icon-style' />
                            <TiSocialFacebookCircular className='icon-style' /></li>
                    </ul>
                    <img className="icon-width" src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" />
                    <img className="icon-width" src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" />
                    <img className="icon-width" src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" />
                </div>
            </footer>
        </>
    );
};

export default Footer;
