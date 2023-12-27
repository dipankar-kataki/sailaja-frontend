import React, {useState,useRef} from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from "./Contact.module.css"
import Iframe from 'react-iframe'
import {FaLocationArrow} from 'react-icons/fa'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import Swal from 'sweetalert2'
import axiosInstance from '../../api/apiConfig'

import { TextField } from '@mui/material'

const Contact = () => {
    const [contactData,setContactData] = useState({fname:'',email:'',subject:'',message:''});
    const form = useRef(null);


    const contactChangeHandler = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
            
          });
     
          setError(e.target.parentNode.parentNode.parentNode.id,'')
    }


    const contactSubmitHandler = (e) => {
        e.preventDefault()
        const contactSubmitBtn = document.getElementById('contactSubmitbtn');

        let flag = true;
        const fname =  document.forms['contactForm']['fname'].value;
        const email =  document.forms['contactForm']['email'].value;
        const subject =  document.forms['contactForm']['subject'].value;
        const message =  document.forms['contactForm']['message'].value;
        const regName = /^[a-zA-Z ]*$/;
        const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

        if(fname.length==0){
            setError('fname','*Name cannot be empty')
            flag=false
      
          }
          if(fname.length <3 && fname.length!=0){
            setError('fname','*Name too short');
            flag=false;
      
          }
          if(!regName.test(fname) && fname.length!=0){
            setError('fname','*Please write a valid name');
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
      
         if(subject.length==0){
          setError('subject','*Subject cannot be empty')
         }
         if(subject.length<10 &&subject.length!=0){
            setError('subject','*Subject too short')
           }
         if(message.length==0){
            setError('message','Message cannot be empty')
           }
        if(message.length <10 && message.length!=0){
            setError('message','*Message too short');
            flag=false;
          }
        
          if(flag==true){
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.innerHTML='Please Wait..'

            axiosInstance.post('api/contact', {
            name: contactData.fname,
            email: contactData.email,
            subject: contactData.subject,
            message: contactData.message
            },
            {
            headers: {
                'Content-type': 'multipart/form-data',
            }
            }
            )
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sent Successfully',
                    text: 'We will contact you soon',
                  })
                  contactSubmitBtn.disabled = false;
                  document.forms['contactForm']['fname'].value = '';
                  document.forms['contactForm']['email'].value = '';
                  document.forms['contactForm']['subject'].value= '';
                  document.forms['contactForm']['message'].value= '';
                  contactSubmitBtn.innerHTML=`Send`
            
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: "Something went wrong! Make sure the fields aren't empty",
                  })
                  contactSubmitBtn.disabled = false;
                  contactSubmitBtn.innerHTML=`Send`
                  document.forms['contactForm']['fname'].value = '';
                  document.forms['contactForm']['email'].value = '';
                  document.forms['contactForm']['subject'].value= '';
                  document.forms['contactForm']['message'].value= '';
                  console.log(error)
                 
            
            });
        }

    }
    const setError = (id,error) => {
        const element = document.getElementById(id);
        element.getElementsByClassName('contactFormErrorClass')[0].innerHTML = error;
      }
  return (
    <>
    <Navbar/>
    <Header title="Contact us"/>
    
    <div className={styles.contact_location}>
        <div className={styles.contact_location_content}>
            <p className={styles.contact_subhead}>Get in touch</p>
            <h2>Visit one of our
            agency locations or
            contact us today</h2>
            <div className={styles.office_loc}>
                <h4> Head Office</h4>
                <p><FaLocationArrow/> Flat NO-G1 MANGALMURTI ENCLAVE, Rangamatir Path, Sachal, Guwahati-781022.</p>
                <p><BsFillEnvelopeFill/>sailajaconstruction@gmail.com</p>
                <p><AiFillPhone/>+91 84719-23990</p>
            </div>

        </div>
        <div className={styles.contact_location_map}>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57309.50246289936!2d91.77168611458143!3d26.136632095963584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a599730996bd5%3A0xb3373cd512d315da!2sSailaja%20Construction!5e0!3m2!1sen!2sin!4v1693457632635!5m2!1sen!2sin"
                height="100%"
                id=""
                className={styles.contactmap}
                display="block"
                position="relative"/>
        </div>
    </div>
    <div className={styles.contact_form}>
        <p>LEAVE A MESSAGE</p>
        <h2>We love to hear from you</h2>
        <form ref={form} onSubmit={contactSubmitHandler} name='contactForm'>
            <div id='fname'>
                <TextField variant="outlined" label="Name" type="text" name='fname' onChange={contactChangeHandler} fullWidth />
                <p className={`${styles.formError} contactFormErrorClass`}></p>
            </div>
            <div id='email'>
                <TextField variant="outlined" label="Email" type="email" name='email' onChange={contactChangeHandler} fullWidth />
                <p className={`${styles.formError} contactFormErrorClass`}></p>
            </div>
            <div id='subject'>
                <TextField variant="outlined" label="Subject" type="text" name='subject' onChange={contactChangeHandler} fullWidth />
                <p className={`${styles.formError} contactFormErrorClass`}></p>
            </div>
            <div id='message'>
                <TextField variant="outlined" label="Message" type="text" name='message' onChange={contactChangeHandler} fullWidth multiline maxRows={5}/>
                <p className={`${styles.formError} contactFormErrorClass`}></p>
            </div>
            <button className={styles.button_primary} id='contactSubmitbtn'>Send</button>
        </form>
        
    </div>
    <Footer/>
    </>
  )
}

export default Contact