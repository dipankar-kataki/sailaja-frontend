import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import styles from "./Associates.module.css"

import logo from "../../assets/logo.png"
import sdlogo from "../../assets/icons/sdconstruction.jpg"
import associatelogo from "../../assets/associatelogodummy.jpg"

const Associates = () => {
  return (
    <>
        <Navbar/>
        <Header title="Associates"/>

        <div className={styles.associates_container}>
            <div className={styles.associate_card}>
                <div className={styles.associates_card_logo}>
                    <img src={associatelogo} alt="" />
                </div>
                <div className={styles.associate_card_desc}>
                    <h2>SD Construction</h2>
                    <p>Sailaja Construction is an associate partner of SD Construction, collaborating to deliver exceptional construction and development solutions through their combined expertise and resources.</p>
                    
                </div>
            </div>
            <div className={styles.associate_card}>
                <div className={styles.associates_card_logo}>
                    <img src={associatelogo} alt="" />
                </div>
                <div className={styles.associate_card_desc}>
                    <h2>MARUTINANDAN DEVELOPERS</h2>
                    <p>
Sailaja Construction partners with Marutinandan Developers, combining strengths to create innovative projects that reflect their shared commitment to quality, excellence, and transformative real estate solutions.</p>
                    
                </div>
            </div>
            <div className={styles.associate_card}>
                <div className={styles.associates_card_logo}>
                    <img src={associatelogo} alt="" />
                </div>
                <div className={styles.associate_card_desc}>
                    <h2>S.M. GROUP</h2>
                    <p>
Sailaja Construction collaborates as a partner with SM Group, synergizing their capabilities to drive forward projects that epitomize excellence, innovation, and collective expertise in the realm of construction.</p>
                    
                </div>
            </div>
           
         
        </div>

        <Footer/>
    
    </>
  )
}

export default Associates