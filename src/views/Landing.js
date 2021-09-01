import React from 'react'
import "../styles/Landing.css"
import ProjectCard from '../components/ProjectCard'
import Title from '../components/Title'
import Contact from '../components/Contact'

function Landing() {
    return (
        <div>
            <div className="bg-blue-100 h-auto grid justify-items-center">
                <Title />
                <ProjectCard />
                <ProjectCard alternate={true}/>
                <ProjectCard />
                <Contact /> 
            </div>
        </div>
    )
}

export default Landing
