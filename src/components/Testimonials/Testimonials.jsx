import React, { useEffect, useState } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';

import styles from "./Testimonials.module.css"

import axiosInstance from '../../api/apiConfig'
import { publicURL } from '../../api/apiConfig';


const Testimonials = ({isGlobal,projectId}) => {
    const [testimonials,setTestimonials] = useState([])

    useEffect(()=>{
        isGlobal ? (
            axiosInstance.get(`/api/testimony?isGlobal=${isGlobal}`)
      .then(function (response) {
         console.log(response.data.data);
         setTestimonials(response.data.data)
        
      })
      .catch(function (error) {
        console.log(error);
      })
    ):(
        axiosInstance.get(`api/testimony/?projectId=${projectId}&isGlobal=${isGlobal}`)
        .then(function (response) {
           console.log(response.data.data);
           setTestimonials(response.data.data)
          
        })
        .catch(function (error) {
          console.log(error);
        })

    )
      
      },[])
      

   


    return (
        <>
        {testimonials.length? (
            <div className={styles.testimonial_container}> 
            <div>
                <h2>Testimonials</h2>
            </div>

            <Splide aria-label="My Favorite Images"
            options={ {
            perPage: 3,
            breakpoints: {
                1000: {
                  perPage: 2,
                  width: "90vw"
                },
                756: {
                    perPage: 1,
                    width: "95vw"
                  },
              },
              
  } }>
                {testimonials.map((testimonialItem)=> (
                    <SplideSlide>
                    <div className={styles.testimonial_card}>
                        <div className={styles.testimonial_card_identity}>
                            <div className={styles.testimonial_image}>
                                <img src={`${publicURL}${testimonialItem.userImage}`} alt="" />
                            </div>
                            <div className={styles.testimonial_card_identity_name}>
                                <h4>{testimonialItem.name}</h4>
                               
                            </div>
                        </div>
                        <div className={styles.testimonial_card_review}>
                            <p>{testimonialItem.review}</p>
                        </div>
                    </div>
                </SplideSlide>

                ))}
              
            </Splide>
        </div>
        ):''}
        
        </>
    )
  
}

export default Testimonials