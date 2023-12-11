import React,{useState,useEffect} from 'react'
import styles from "./Projects.module.css"
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header"
import project1 from "../../assets/dummy_project1.jpg"
import project2 from "../../assets/dummt_project2.jpg"
import project3 from "../../assets/dummt_project3.jpg"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import madbabimg from "../../assets/Madhab mansion/WhatsApp Image 2023-08-04 at 15.22.16 (1).jpeg"
import anamikaimg from "../../assets/Anamika Aloy/WhatsApp Image 2023-08-04 at 15.25.28 (1).jpeg"
import saikiaimg from "../../assets/Saikia Complex/WhatsApp Image 2023-08-04 at 15.27.37.jpeg"
import sunshineimg from "../../assets/Sunshine Residency/WhatsApp Image 2023-08-04 at 15.36.16 (1).jpeg"
import paradiseimg from "../../assets/Sailaja's Paradise/WhatsApp Image 2023-08-04 at 15.44.21.jpeg"
import moment from 'moment'


const Projects = () => {

  const [ongoingProjects, setOngoingProjects] = useState([]);
  const navigate = useNavigate()
  

  useEffect(()=>{
    axios.get(`http://sailajaconstruction.com//api/project/web?status=ongoing`)
  .then(function (response) {
     console.log(response.data.data);
     setOngoingProjects(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  },[])
  return (
    <>
        <Navbar/>
        <Header title="Ongoing Projects"/>
        <div className={styles.projects}>
        <div className={styles.projects_header}>
          <div className={styles.projects_header_left}>
            <h2>Ongoing Projects</h2>
          </div>
        </div>
        <div className={styles.projects_body}>
        {ongoingProjects.map(ongoingProject => (
            <button  onClick={()=>{ ongoingProject.description && navigate("/singleproject", {state:{projectInfo: ongoingProject}})}} className={styles.project_single} key={ongoingProject._id}>
            <div className={styles.project}>
              <div className={styles.project_image}>
                <img src={`http://sailajaconstruction.com//${ongoingProject.projectImage}`} alt="" />
              </div>
              <div className={styles.project_info}>
                <h3>{ongoingProject.projectName}</h3> 
                {ongoingProject.startDate && ongoingProject.endDate &&
                 <p>{moment(ongoingProject.startDate).format('DD-MMM-YYYY')} <b>-</b> {moment(ongoingProject.endDate).format('DD-MMM-YYYY')}</p>
                
                }
               
               
              </div>
            </div>
          </button>

          ))}
          
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Projects