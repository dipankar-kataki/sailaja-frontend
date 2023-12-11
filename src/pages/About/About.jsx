import React from 'react'
import styles from "./About.module.css"

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import dummyperson from "../../assets/random_person.jpg"
import dummyimg from "../../assets/dummy_project1.jpg"

import sailajapic from "../../assets/Sailaja's Paradise/WhatsApp Image 2023-08-04 at 15.44.21.jpeg"
import sailajapic2 from "../../assets/Sailaja's Paradise/WhatsApp Image 2023-08-04 at 15.44.21 (1).jpeg"
import ownerimg from "../../assets/proprietorimg.jpeg"

const About = () => {
  return (
    <>
    <Navbar/>
    <Header title="About us"/>
    <div className={styles.about_overview_container}>
        <h2>Overview</h2>
        <div className={styles.about_overview}>
            <div className={styles.about_overview_text}>
                        <p>You learn a few things during 13 years in business. Today, we apply that expertise to serve customers and communities in the region. We have our employees working every day to nourish our surroundings in a safe, responsible, sustainable way. Our services are designed to spark enthusiasm and improve quality of life. We want to deliver top quality and reliability. SAILAJA CONSTRUCTION is a sole proprietorship firm dealing in construction of residential flats and commercial spaces. Currently we are operating in Guwahati and Nagaon with a vision to expand in the future.</p>
                        <p><b>Our Slogan: </b>Helping Hands, Shaping your Dream Home.</p>
                    <div className={styles.about_team_supercontainer}>
                        <div className={styles.about_team}>
                            <h3>Our Team</h3>
                            <div className={styles.about_team_container}>
                                <div className={styles.about_team_item}>
                                    <h4>Mridula Gogoi (Legal Advisor)</h4>
                                    <p>Contact: 94356-47314</p>
                                </div>
                                <div className={styles.about_team_item}>
                                    <h4>Himangshu Kalita (Accounts Head)</h4>
                                    <p>Contact: 70029-04158</p>
                                </div>
                                <div className={styles.about_team_item}>
                                    <h4>Bishal Kalita (Tax Consultant)</h4>
                                    <p>Contact: 78965-17851</p>
                                </div>
                                <div className={styles.about_team_item}>
                                    <h4>Anupam Kshatriya (Manager)</h4>
                                    <p>Contact: 99577-20405</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_overview_profiles}>
                            <div className={styles.about_profile}>
                                <div className={styles.about_profile_img}>
                                    <img src={ownerimg} alt="" />
                                </div>
                                <h3> Mr. Manash Pratim Talukdar</h3>
                                <p>Proprietor</p>
                            </div>
                        </div>
                    </div>
                   
               
            </div>
            {/* <div className={styles.about_overview_profiles}>
              
                <div className={styles.about_profile}>
                    <div className={styles.about_profile_img}>
                        <img src={ownerimg} alt="" />
                    </div>
                    <h3> Mr. Manash Pratim Talukdar</h3>
                    <p>Proprietor</p>
                </div>
            </div> */}
        </div>
    </div>

    <div className={styles.about_counter}>
        <div className={styles.about_counter_item}>
            <h3>20 +</h3>
            <p>Projects Completed</p>
        </div>
        <div className={styles.about_counter_item}>
            <h3>200+</h3>
            <p>Satisfied Customers</p>
        </div>
        <div className={styles.about_counter_item}>
            <h3>15+</h3>
            <p>Years of Sailaja</p>
        </div>
    </div>

    <div className={styles.about_mission}>
        <div className={styles.about_mission_vission}>
            <div className={styles.about_mission_text}>
                <h2>Mission</h2>
                <p>To be a leading construction company which uses technology and innovation
to meet the needs of all the clients
</p>
            </div>
            <div className={styles.about_vission_text}>
            <h2>Vission</h2>
            <p>To be one of the leading construction company by providing best quality products at affordable prices by the year 2028.</p>
        </div>
        </div>
        
        <div className={styles.about_mission_img}>
            <img src={sailajapic} alt="" />
        </div>
    </div>
    <div className={styles.about_general_info}>
        <h2>General Information</h2>
        <div className={styles.about_general_info_content}>
            <div className={styles.about_general_info_img}>
                <img src={sailajapic2} alt="" />

            </div>
            <div className={styles.about_general_info_text}>
                <h3>General Info</h3>
                <p><b>•	Incorporation year: </b>2010</p>
                <p><b>•	Main Office: </b>Flat NO-G1 MANGALMURTI ENCLAVE, Rangamatir Path, Sachal, Guwahati-781022.</p>
                <p><b>•	Branch Office: </b>House No. 14, Abu Path, Fauzdaripatti, Nagaon, ASSAM.</p>
                <p><b>•	Proprietor: </b>: Mr. Manash Pratim Talukdar</p>
            </div>
        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default About