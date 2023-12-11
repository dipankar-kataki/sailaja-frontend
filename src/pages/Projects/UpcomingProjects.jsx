import React,{useState,useEffect} from 'react'
import styles from "./Projects.module.css"
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import moment from 'moment'
import durgaimg from "../../assets/Durga Residency/WhatsApp Image 2023-08-04 at 15.51.23 (1).jpeg"

const Projects = () => {
  const [upcomingProjects, setUpcomingProjects] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`http://sailajaconstruction.com//api/project/web?status=upcoming`)
  .then(function (response) {
     console.log(response.data.data);
     setUpcomingProjects(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  },[])
  return (
    <>
        <Navbar/>
        <Header title="Upcoming Projects"/>
        <div className={styles.projects}>
        <div className={styles.projects_header}>
          <div className={styles.projects_header_left}>
            <h2>Upcoming Projects</h2>
          </div>
        </div>
        <div className={styles.projects_body}>
        {upcomingProjects.map(upcomingProject => (
            <button onClick={()=>{upcomingProject.description && navigate("/singleproject", {state:{projectInfo: upcomingProject}})}} className={styles.project_single} key={upcomingProject._id}>
            <div className={styles.project}>
              <div className={styles.project_image}>
                <img src={`http://sailajaconstruction.com//${upcomingProject.projectImage}`} alt="" />
              </div>
              <div className={styles.project_info}>
                <h3>{upcomingProject.projectName}</h3>
                {upcomingProject.startDate && upcomingProject.endDate &&
                 <p>{moment(upcomingProject.startDate).format('DD-MMM-YYYY')} <b>-</b> {moment(upcomingProject.endDate).format('DD-MMM-YYYY')}</p>
                
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