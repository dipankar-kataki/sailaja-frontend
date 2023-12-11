import React, { useEffect, useRef, useState } from 'react'
import styles from "./Home.module.css"
import Navbar from '../../components/Navbar/Navbar'

import img1 from "../../assets/dummy_image1.jpg"

import icon1 from "../../assets/icons/apartment.svg"
import Testimonials from '../../components/Testimonials/Testimonials'
import Iframe from 'react-iframe'
import {BiPhoneCall} from "react-icons/bi"
import Footer from '../../components/Footer/Footer'
import { register } from 'swiper/element/bundle';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import houseicon from "../../assets/icons/svg/High Quality Homes-01.svg"
import excellenceicon from "../../assets/icons/svg/Proven Excellence-02.svg"
import communicationicon from "../../assets/icons/svg/Transparent Communication-03.svg"
import buyicon from "../../assets/icons/svg/Buying Made Easy-04.svg"
import trusticon from "../../assets/icons/svg/Trustworthy Partners-05.svg"
import showcaseicon from "../../assets/icons/svg/Detailed Property Showcase-06.svg"

 
import homeaboutimg from "../../assets/Sailaja's Paradise/WhatsApp Image 2023-08-04 at 15.44.21 (1).jpeg"
import Swal from 'sweetalert2'

const Home = () => {
  register();

  const [allProjects,setAllProjects] = useState([])
  const [enquiryForm,setEnquiryForm] = useState({name: '',email:'',phonenumber:0,projectId:''});
  const [completedProjects, setCompletedProjects] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get(`http://sailajaconstruction.com//api/project/web`)
  .then(function (response) {
     console.log(response.data.data);
     setCompletedProjects(response.data.data)
  })
  .catch(function (error) {
    console.log("Error deleting file:", error);
  });
  },[])

  const form = useRef(null);

  useEffect(()=>{
    axios.get('http://sailajaconstruction.com//api/project/list')
  .then(function (response) {
    // console.log(response.data.data);
    setAllProjects(response.data.data)
   
  })
  .catch(function (error) {
    console.log(error);
  })

  },[])


  const enquiryChangeHandler = (e) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value,
      
    });
    setError(e.target.parentElement.id,'')

  
    
  }


  const enquirySubmitHandler = (e) =>{
    e.preventDefault()
    const enquirySubmitBtn = document.getElementById('submitbtn');

    let flag = true;
    const fname =  document.forms['homeInquiryForm']['name'].value;
    const email =  document.forms['homeInquiryForm']['email'].value;
    const phnumber =  document.forms['homeInquiryForm']['phonenumber'].value;
    const projectId =  document.forms['homeInquiryForm']['projectId'].value;
    const regName = /^[a-zA-Z ]*$/;
    const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    const regPhn = /^[6-9]{1}[0-9]{9}$/

    if(fname.length==0){
      setError('name','*Name cannot be empty')
      flag=false

    }
    if(fname.length <3 && fname.length!=0){
      setError('name','*Name too short');
      flag=false;

    }
    if(!regName.test(fname) && fname.length!=0){
      setError('name','*Please write a valid name');
      flag=false;
    }
    if(email.length == 0){
      setError('email','*Email id cannot be empty')
      flag=false
    }
    if(!regEmail.test(email) &&email.length!=0){
      setError('email','*Invalid Email')
      flag=false;
    }

   if(phnumber.length==0){
    setError('phnumber','*Phone number cannot be empty')
    flag=false
   }
    if(!regPhn.test(phnumber) && phnumber.length!=0){
      setError('phnumber','*Invalid phone number.');
      flag=false;
    }
    if(projectId.length==0){
      setError('project_drop', '*Please select a project')
      flag=false;
    }
 
   
  if(flag==true){
    enquirySubmitBtn.disabled = true;
    enquirySubmitBtn.innerHTML='Please Wait..'

    axios.post('http://sailajaconstruction.com//api/enquiry', {
      name: enquiryForm.name,
      email: enquiryForm.email,
      mobile: enquiryForm.phonenumber,
      projectId: enquiryForm.projectId
    },
    {
      headers: {
        'Content-type': 'multipart/form-data',
        // 'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    .then(function (response) {
      Swal.fire({
        icon: 'success',
        title: 'Sent Successfully',
        text: 'We will contact you soon',
      })
      enquirySubmitBtn.disabled = false;
      document.forms['homeInquiryForm']['name'].value = '';
      document.forms['homeInquiryForm']['email'].value = '';
      document.forms['homeInquiryForm']['phonenumber'].value= '';
      document.forms['homeInquiryForm']['projectId'].value= '';
      enquirySubmitBtn.innerHTML=`SEND A CALLBACK`
      
    })
    .catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Something went wrong! Make sure the fields aren't empty",
      })
      enquirySubmitBtn.disabled = false;
      document.forms['homeInquiryForm']['name'].value = '';
      document.forms['homeInquiryForm']['email'].value = '';
      document.forms['homeInquiryForm']['phonenumber'].value= '';
      document.forms['homeInquiryForm']['projectId'].value= '';
      enquirySubmitBtn.innerHTML='SEND A CALLBACK'
     
    });
  }

  }

  const setError = (id,error) => {
    const element = document.getElementById(id);
    console.log(element)
    element.getElementsByClassName('formErrorClass')[0].innerHTML = error;
  }

 

  return (
    <>
      <Navbar/>
      <swiper-container loop="true" pagination="true" scrollbar="true" autoplay='true' navigation>
        <swiper-slide >
            <div className={`${styles.slideritem} ${styles.slideritem1}`}>
                <p>Sailaja Constructions</p>
                <h2>Unlocking Doors to Your Dreams</h2>
                <Link to="/completedprojects" style={{textDecoration: "none"}}>
                  <button>View Projects <AiOutlineArrowRight/></button>
                </Link>
                <div className={styles.header_contact}>
                <div className={styles.header_contact_icon}>
                    <BiPhoneCall/>
                    </div>
                    <div className={styles.header_contact_text}>
                        <p>Call us</p>
                        <p className={styles.header_contact_num}>+91 84719-23990</p>
                    </div>

                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className={`${styles.slideritem} ${styles.slideritem2}`}>
                <p>Sailaja Housing Development</p>
                <h2>Turning Houses into Homes</h2>
                <Link to="/completedprojects" style={{textDecoration: "none"}}>
                  <button>View Projects <AiOutlineArrowRight/></button>
                </Link>
                <div className={styles.header_contact}>
                    <div className={styles.header_contact_icon}>
                    <BiPhoneCall/>
                    </div>
                    <div className={styles.header_contact_text}>
                        <p>Call us</p>
                        <p className={styles.header_contact_num}>+91 84719-23990</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className={`${styles.slideritem} ${styles.slideritem3}`}>
                <p>Sailaja Housing Development</p>
                <h2>We provide the best real estate service</h2>
                <Link to="/completedprojects" style={{textDecoration: "none"}}>
                  <button>View Projects <AiOutlineArrowRight/></button>
                </Link>
                <div className={styles.header_contact}>
                    <div className={styles.header_contact_icon}>
                    <BiPhoneCall/>
                    </div>
                    <div className={styles.header_contact_text}>
                        <p>Call us</p>
                        <p className={styles.header_contact_num}>+91 84719-23990</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className={`${styles.slideritem} ${styles.slideritem4}`}>
                <p>Sailaja Housing Development</p>
                <h2>Real Estate, Real Dreams</h2>
                <Link to="/completedprojects" style={{textDecoration: "none"} }>
                  <button>View Projects <AiOutlineArrowRight/></button>
                </Link>
                <div className={styles.header_contact}>
                    <div className={styles.header_contact_icon}>
                    <BiPhoneCall/>
                    </div>
                    <div className={styles.header_contact_text}>
                        <p>Call us</p>
                        <p className={styles.header_contact_num}>+91 84719-23990</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className={`${styles.slideritem} ${styles.slideritem5}`}>
                <p>Sailaja Housing Development</p>
                <h2>Empowering Your Property Journey</h2>
                <Link to="/completedprojects" style={{textDecoration: "none"}}>
                  <button>View Projects <AiOutlineArrowRight/></button>
                </Link>
                <div className={styles.header_contact}>
                    <div className={styles.header_contact_icon}>
                    <BiPhoneCall/>
                    </div>
                    <div className={styles.header_contact_text}>
                        <p>Call us</p>
                        <p className={styles.header_contact_num}>+91 84719-23990</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper-container>

      <div className={styles.projects}>
        <div className={styles.projects_header}>
          <div className={styles.projects_header_left}>
            <p>WHAT WE BUILD</p>
            <h2>Featured Projects</h2>
          </div>
          <div className={styles.projects_header_right}>
            <div>
              <h3>20<sup>+</sup></h3>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
        <div className={styles.projects_body}>
        {completedProjects.slice(0, 6).map(completedProject => (
            <button to='/singleproject' onClick={()=>{navigate("/singleproject", {state:{projectInfo: completedProject}})}} className={styles.project_single} key={completedProject._id}>
            <div className={styles.project}>
              <div className={styles.project_image}>
                <img src={`http://sailajaconstruction.com//${completedProject.projectImage}`} alt="" />
              </div>
              <div className={styles.project_info}>
                <h3>{completedProject.projectName}</h3>
             
              </div>
            </div>
          </button>

          ))}
        </div>
        <Link to="/completedprojects" style={{textDecoration: "none"}}>
        <button className={`${styles.button_primary} ${styles.midbtn}`}>VIEW ALL PROJECTS</button>
        </Link>
      </div>
      <div className={styles.whychooseus_container}>
        <div className={styles.whychooseus_header}>
        <p>WHY CHOOSE US</p>
        <h2>Where happiness lives</h2>
        </div>
        
        <div className={styles.whychooseus_content}>
          <div className={styles.whychooseus_item}>
            <img src={houseicon} alt="" />
            <h3>High Quality Homes</h3>
           
          </div>
          <div className={styles.whychooseus_item}>
            <img src={excellenceicon} alt="" />
            <h3>Proven Excellence</h3>

          </div>
          <div className={styles.whychooseus_item}>
            <img src={communicationicon} alt="" />
            <h3>Transparent Communication</h3>
            
          </div>
          <div className={styles.whychooseus_item}>
            <img src={buyicon} alt="" />
            <h3>Buying Made Easy</h3>
          

          </div>
          <div className={styles.whychooseus_item}>
            <img src={trusticon} alt="" />
            <h3>Trustworthy Partners</h3>
           
          </div>
          <div className={styles.whychooseus_item}>
            <img src={showcaseicon} alt="" />
            <h3>Detailed Property Showcase</h3>
           
          </div>
        </div>
      </div>
      <div className={styles.aboutus}>
        <div className={styles.aboutus_img}>
          <img src={homeaboutimg} alt="" />
       
        </div>
        <div className={styles.about_us_content}>
          <p className={styles.aboutus_content_preheader}>ABOUT US</p>
          <h2>Best Real Estate Company in Assam</h2>
          <p>We learn a few things during 13 years in business. Today, we apply that expertise to serve customers and communities in the region. We have our employees working every day to nourish our surroundings in a safe, responsible, sustainable way. Our services are designed to spark enthusiasm and improve quality of life. We want to deliver top quality and reliability...</p>
          <Link to={'/about'} style={{textDecoration:'none'}}><button className={`${styles.button_primary}`}>Read More</button></Link>
        </div>
      </div>

      <Testimonials isGlobal={true} projectId={''} />

      <div className={styles.enquiry_container}>
        <div className={styles.enquiry_map}>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57309.50246289936!2d91.77168611458143!3d26.136632095963584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a599730996bd5%3A0xb3373cd512d315da!2sSailaja%20Construction!5e0!3m2!1sen!2sin!4v1693457632635!5m2!1sen!2sin"
        height="100%"
        id=""
        className={styles.map}
        display="block"
        position="relative"/>
        </div>
        <div className={styles.enquiry_form}>
          <p>QUICK ENQUIRY</p>
          <h2>Want more information?</h2>

          <form action="" ref={form} name='homeInquiryForm' onSubmit={enquirySubmitHandler}>
            <div className={styles.formdiv} >
              <div id="name">
                <input type="text" placeholder='Name' name='name' onChange={enquiryChangeHandler}   />
                <p className={`${styles.formError} formErrorClass`}></p>
              </div>
              <div id="email">
                <input type="email" placeholder='Email' name='email' onChange={enquiryChangeHandler} />
                <p className={`${styles.formError} formErrorClass`}></p>
              </div>
            </div>

            <div className={styles.formdiv}>
              <div id="phnumber">
                <input type="number" placeholder='Phone number' name='phonenumber' onChange={enquiryChangeHandler}  />
                <p className={`${styles.formError} formErrorClass`}></p>
              </div>
              <div id="project_drop">
              <select name="projectId" onChange={enquiryChangeHandler}>
                <option value="">Select a Project</option>
                {allProjects.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.projectName}
                  </option>
                ))}
              </select>
              <p className={`${styles.formError} formErrorClass`}></p>
              </div>
            </div>
            <button  className={styles.button_primary} id='submitbtn'><BiPhoneCall style={{fontSize:"1.3rem"}}/> SEND A CALLBACK</button>
          </form>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Home