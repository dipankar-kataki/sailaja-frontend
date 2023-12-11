import React, { useEffect, useState } from 'react'
import styles from "./Projects.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import moment from 'moment'

const Projects = () => {
  const [completedProjects, setCompletedProjects] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get(`http://sailajaconstruction.com//api/project/web?status=completed`)
  .then(function (response) {
     console.log(response.data.data);
     setCompletedProjects(response.data.data)
  })
  .catch(function (error) {
    console.log("Error deleting file:", error);
  });
  },[])

  
  return (
    <>
        <Navbar/>
        <Header title="Completed Projects"/>
        <div className={styles.projects}>
        <div className={styles.projects_header}>
          <div className={styles.projects_header_left}>
            <h2>Completed Projects</h2>
          </div>
        </div>
        
        <div className={styles.projects_body}>
          {completedProjects.map(completedProject => (
            <button onClick={()=>{ completedProject.description && navigate("/singleproject", {state:{projectInfo: completedProject}})}} className={styles.project_single} key={completedProject._id}>
            <div className={styles.project}>
              <div className={styles.project_image}>
                <img src={`http://sailajaconstruction.com//${completedProject.projectImage}`} alt="" />
              </div>
              <div className={styles.project_info}>
                <h3>{completedProject.projectName}</h3>
                {completedProject.startDate && completedProject.endDate &&
                 <p>{moment(completedProject.startDate).format('DD-MMM-YYYY')} <b>-</b> {moment(completedProject.endDate).format('DD-MMM-YYYY')}</p>
                
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