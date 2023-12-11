import React from 'react'
import styles from "./Header.module.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from 'react-router-dom'


const Header = ({title}) => {
  return (
    <div className={styles.header_container}>
        <h2>{title}</h2>
        <div className={styles.header_nav}>
            <Link to={'/'} className={styles.header_nav_prev}>Home</Link>
            <AiOutlineArrowRight/>
            <p>{title}</p>
        </div>

    </div>
  )
}

export default Header