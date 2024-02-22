import "./ProjectCardStyle.css"


import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
  <NavLink to={props.view} target="_blank" rel="noreferrer" className="btn">
    <div className="project-card">
        <img src={props.imgsrc} alt="" className="image"/>
        <h2 className="project-title">{props.title}</h2>
        <p className="project-details">{props.text}</p>
        <div className="project-logo"><br></br>
        {props.logo.map((icon, index) => (
        <span key={index}>{icon}</span>
        ))}
         </div>
    </div>
    </NavLink>
  )
}

export default ProjectCard