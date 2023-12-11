import React,{useState} from 'react'
import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"
import { Link, NavLink} from 'react-router-dom'
import {FaAngleDown} from "react-icons/fa"
import Dropdown from '../Dropdown/Dropdown'
import {RxHamburgerMenu} from "react-icons/rx"
import {RxCross1} from "react-icons/rx"
import {AiFillHome} from "react-icons/ai"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {BsFillBuildingsFill} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"
import {AiFillContacts} from "react-icons/ai"

const Navbar = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
        document.body.style.overflow = "hidden"
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
        document.body.style.overflow = "visible"
    }

    
  return (
    <>
    <nav className={styles.navbar}>
        <div className={styles.logoimg}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.navlinks}>
            <div className={styles.navlink}>
               <NavLink 
               to='/' 
               className={styles.navlink_item} 
               style={({ isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#BC986B" : "",
                };
              }}
               >Home</NavLink>
               
            </div>
            <div className={styles.navlink}>
                 <NavLink to='/about' 
                 className={styles.navlink_item} 
                 style={({ isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#BC986B" : "",
                };
              }}>About Us</NavLink>
            </div>
            <div className={styles.navlink}>
               <p className={styles.navlink_item}>Projects</p>
                <FaAngleDown/>
                <div className={styles.nav_dropdown}>
                    <Link to='/ongoingprojects' className={styles.nav_dropdown_link}>Ongoing Projects</Link>
                    <Link to='/completedprojects' className={styles.nav_dropdown_link}>Completed Projects</Link>
                    <Link to='/upcomingprojects' className={styles.nav_dropdown_link}>Upcoming Projects</Link>
                </div>
            </div>
            <div className={styles.navlink}>
               <NavLink to='/associates'
                style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#BC986B" : "",
                    };
                  }} 
               className={styles.navlink_item} 
               >Associates</NavLink>
            </div>
            <div className={styles.navlink}>
               <NavLink to='/contact' 
                style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#BC986B" : "",
                    };
                  }}
               className={styles.navlink_item} 
               >Contact us</NavLink>
                
            </div>
        </div>
        <div className={styles.menu_icon}>
            <button onClick={openSidebar}><RxHamburgerMenu/></button>
        </div>

    </nav>
    {isSidebarOpen ? <div className={styles.sidebar}>
        <div className={styles.sidebar_header}>
            <img src={logo} alt="" />
            <button onClick={closeSidebar}><RxCross1/></button>
        </div>
        <div className={styles.sidebar_body}>
            <div className={styles.sidebar_body_item}>
                <Link to='/' className={styles.sidebar_body_link}><AiFillHome/> Home</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link to='/about' className={styles.sidebar_body_link}><AiOutlineInfoCircle/>About us</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link to='/completedprojects' className={styles.sidebar_body_link}><BsFillBuildingsFill/>Completed Projects</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link to='/ongoingprojects' className={styles.sidebar_body_link}><BsFillBuildingsFill/>Ongoing Projects</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link to='/upcomingprojects' className={styles.sidebar_body_link}><BsFillBuildingsFill/>Upcoming Projects</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link to='/associates' className={styles.sidebar_body_link}><BsFillPeopleFill/>Associates</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link to='/contact' className={styles.sidebar_body_link}><AiFillContacts/>Contact us</Link>
            </div>
        </div>
    </div> : '' }
    {/* <div className={styles.sidebar}>
        <div className={styles.sidebar_header}>
            <img src={logo} alt="" />
            <button><RxCross1/></button>
        </div>
        <div className={styles.sidebar_body}>
            <div className={styles.sidebar_body_item}>
                <Link className={styles.sidebar_body_link}><AiFillHome/> Home</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link className={styles.sidebar_body_link}><AiOutlineInfoCircle/>About us</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link className={styles.sidebar_body_link}><BsFillBuildingsFill/>Projects</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link className={styles.sidebar_body_link}><BsFillPeopleFill/>Associates</Link>
            </div>
            <div className={styles.sidebar_body_item}>
                <Link className={styles.sidebar_body_link}><AiFillContacts/>Contact us</Link>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default Navbar