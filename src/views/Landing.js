import React from 'react'
import "../styles/Landing.css"
import ProjectCard from '../components/ProjectCard'
import Title from '../components/Title'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

function Landing() {
    return (
        <div>
            <div className="base ">
                <Navbar />
                <Title />
                <ProjectCard />
                {/* <ProjectCard alternate={true}/>
                <ProjectCard /> */}
                <Contact /> 
            </div>
        </div>
    )
}

export default Landing
