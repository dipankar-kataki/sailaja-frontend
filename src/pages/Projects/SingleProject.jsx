import React,{useState, useEffect} from 'react'
import styles from "./SingleProject.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import dummyimg from "../../assets/dummy_project1.jpg"

import amenityicon1 from "../../assets/icons/apartment.svg"
import architectureimg from "../../assets/Mangalmurti Enclave/Drawing (1)_page-0001.jpg"
import Testimonials from '../../components/Testimonials/Testimonials'
import { register } from 'swiper/element/bundle';
import locationimg from "../../assets/locationimg.png"
import axios from 'axios'

import ImageGallery from "react-image-gallery";
import { useLocation } from 'react-router-dom'

import cctvicon from "../../assets/icons/cctvicon.png"
import parkingicon from "../../assets/icons/parkingicon.png"
import watersupplyicon from "../../assets/icons/watersupplyicon.png"
import roadicon from "../../assets/icons/roadicon.png"
import firesafetyicon from "../../assets/icons/firesafetyicon.png"
import lifticon from "../../assets/icons/lifticon.png"
import balconyicon from "../../assets/icons/balconyicon.png"
import peticon from "../../assets/icons/peticon.png"
import { publicURL } from '../../api/apiConfig'









const SingleProject = () => {
    register();
    const location = useLocation();
    const [gallery,setGallery] = useState([])
    const [projectDesc,setProjectDesc] = useState(location.state.projectInfo);
    const [amenities,setAmenities]= useState([]);


   

    useEffect(()=> {
        axios.get(`http://sailajaconstruction.com/backend/api/gallery/project/${projectDesc._id}`)
        .then(function (response) {
            setGallery(response.data.data)
            
        })
        .catch(function (error) {
            console.log(error);
        });    
    },[])

    useEffect(()=>{
        axios.get(`http://sailajaconstruction.com/backend/api/amenity/project/${projectDesc._id}`)
        .then(function(response){
            console.log(response)
            console.log(response.data.data.amenities)
            setAmenities(response.data.data.amenities)
        })
        .catch(function(error){
            console.log(error)
        })

    },[projectDesc])

  


    const images = gallery.map((galleryItem) => ({
        original: `${publicURL}${galleryItem.filePath}`,
        thumbnail: `${publicURL}${galleryItem.filePath}`
      }));
    console.log(images)

  return (
    <>
        <Navbar/>
        <Header title={projectDesc.projectName}/>
        <div className={styles.project_overview}>
            <h2>Overview</h2>
            <div className={styles.project_overview_container}>
                <div className={styles.project_overview_img}>
                    <img src={`${publicURL}${projectDesc.projectImage}`} alt="" />
                </div>
                <div className={styles.project_overview_text}>
                    <p>{projectDesc.description}</p>
                    <div className={styles.project_download_btn}>
                        {projectDesc.projectNoc &&  <a href={`${publicURL}${projectDesc.projectNoc}`} target='_blank'  className={styles.button_primary}>Download NOC</a> }
                        {projectDesc.approvedPlan &&  <a href={`${publicURL}${projectDesc.approvedPlan}`} target='_blank'  className={styles.button_primary}>Download Approved Plan</a> }
                        {projectDesc.brochure &&  <a href={`${publicURL}${projectDesc.brochure}`} target='_blank'  className={styles.button_primary}>Download Brochure</a> }
                        {projectDesc.reraNoc &&  <a href={`${publicURL}${projectDesc.reraNoc}`} target='_blank'  className={styles.button_primary}>Download ReraNoc</a> }
                       
                        
                    </div>
                </div>              
            </div>
        </div>

        {projectDesc.projectName == "Sailaja's Paradise" && 
        <div className={styles.projectteam}>
            <h2 className={styles.projectteam_heading}>Team</h2>
            <div className={styles.projectteam_container}>
                <div className={styles.projectteam_item}>
                    <h3>Arindam Bora (Project manager) </h3>
                    <p>Call at: 91010-38031</p>
                </div>
                <div className={styles.projectteam_item}>
                    <h3>Pradunna Nath (Site supervisor) </h3>
                    <p>Call at: 93657-27787</p>
                </div>
            </div>
        </div>
}

        
           {/* ********************* GALLERY*************** */}

       <div className={styles.project_gallery_container}>
            <h2>Gallery</h2>
            <ImageGallery items={images} />
       </div>

        {/* **************** Gallery******************* */}


        <div className={styles.project_amenities}>
            <h2>Amenities</h2>
            <div className={styles.project_amenities_container}>
                    {amenities.map(amenity=>(
                        <div className={styles.project_amenity} key={amenity._id}>
                        <img src={`${publicURL}${amenity.amenityPath}`} alt="" />
                        <p>{amenity.amenityName}</p>
                    </div>
                    ))}
                    
                   
                
            </div>
        </div>
        <div className={styles.project_location}>
            <h2>Location</h2>
            <div className={styles.project_location_container}>
                <div className={styles.locationimg}>
                    <img src={locationimg} alt="" />
                </div>
                <div className={styles.project_address}>
                    <h3>Come visit us</h3>
                    <p>Explore prime real estate opportunities with us! We are your gateway to discovering exceptional properties in this thriving city. Whether you're seeking a new home or a smart investment, we have a range of options to suit your needs.</p>
                    <p><b>Our Location: </b>{projectDesc.location}</p>
                </div>
            </div>
        </div>



       
       
        

        <Testimonials isGlobal={false} projectId={`${projectDesc._id}`}/>

        <Footer/>
    </>
  )
}

export default SingleProject