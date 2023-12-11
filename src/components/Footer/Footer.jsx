import React from 'react'
import footerstyles from "./Footer.module.css"
import {FaAngleRight} from "react-icons/fa"
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import {FaFacebookF} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className={footerstyles.upper_footer}>
            <h2>Get in touch</h2>
            <div className={footerstyles.footer_contacts}>
                <div className={footerstyles.footer_contact}>
                    <p>PHONE</p>
                    <strong>+91 84719-23990</strong>
                    <p>Flat NO-G1 MANGALMURTI ENCLAVE, Rangamatir Path, Sachal, Guwahati-781022.</p>
                </div>
                <div className={footerstyles.footer_contact}>
                    <p>Email</p>
                    <strong>sailajaconstruction@gmail.com</strong>
                    <div className={footerstyles.footer_social_links}>
                        <a href="https://www.facebook.com/profile.php?id=100068292787808&mibextid=9R9pXO" target='_blank'><FaFacebookF/></a>
                        <a href="mailto:sailajaconstruction@gmail.com" target='_blank'><GrMail/></a>
                        <a href="#"><AiOutlineInstagram/></a>
                    </div>
                </div>
            </div>
        </div>
       
        <div className={footerstyles.main_footer}>
            <div className={footerstyles.main_footer_about}>
                <h3>About us</h3>
                <p>You learn a few things during 13 years in business. Today, we apply that expertise to serve customers and communities in the region. We have our employees working every day to nourish our surroundings in a safe, responsible, sustainable way.</p>
            </div>
            <div className={footerstyles.footer_links}>
           
                <div>
                    <h3>Company Info</h3>
                    <div className={footerstyles.footer_nav}>
                        <Link to='/' className={footerstyles.footer_nav_link}><FaAngleRight/><p>Home</p></Link>
                        <Link to='/about' className={footerstyles.footer_nav_link}><FaAngleRight/><p>About us</p></Link>
                        <Link to='/completedprojects' className={footerstyles.footer_nav_link}><FaAngleRight/><p>Projects</p></Link>
                        <Link to='/associates' className={footerstyles.footer_nav_link}><FaAngleRight/><p>Associates</p></Link>
                        <Link to='/contact' className={footerstyles.footer_nav_link}><FaAngleRight/><p>Contact us</p></Link>
                    </div>

                </div>
                <div>
                    <h3>Useful links</h3>
                    <div className={footerstyles.footer_nav}>
                        <Link to='/ongoingprojects' className={footerstyles.footer_nav_link}><FaAngleRight/><p>Ongoing Projects</p></Link>
                        <Link to='/completedprojects' className={footerstyles.footer_nav_link}><FaAngleRight/><p>Completed Projects</p></Link>
                        <Link to='/upcomingprojects' className={footerstyles.footer_nav_link}><FaAngleRight/><p>Upcoming Projects</p></Link>
                        
                    </div>

                </div>
                </div>
         
            <div className={footerstyles.footer_logo}> 
                <img src={logo} alt="" />
            </div>
        </div>
        <div className={footerstyles.copyright}>
            <p>Copyright © 2023 | All Rights Reserved. Designed & Developed by Ekodus Technologies.</p>
        </div>
       
    </footer>
  )
}

export default Footer