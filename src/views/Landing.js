import React, { useEffect, useRef } from 'react'
import "../styles/Landing.css"
import anime from "animejs"
import { projects_data } from "../store/projects"

import ProjectCard from '../components/ProjectCard'
import Title from '../components/Title'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

function Landing() {
    const title = useRef();
    const contact = useRef();
    const refs = {"headingRef": false, "footerRef": false}

    useEffect(() => {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                refs[entry.target.id] = entry.isIntersecting
            })
            !refs.footerRef && !refs.headingRef ?
                changeBackground("#FFF") :
            refs.footerRef && !refs.headingRef ?
                changeBackground("#FF8252") :
                changeBackground("#000")
        });
        io.observe(title.current)
        io.observe(contact.current)
    })

    const changeBackground = (color) => {
        anime({
            targets: document.body,
            background: color,
            duration: 3000
        })
    }

    return (
        <div>
            <div className="base ">
                <Navbar />
                <Title titleRef={title}/>
                {projects_data.map(proj => 
                    <ProjectCard content={proj} />
                )}
                {/* <ProjectCard alternate={true}/>
                <ProjectCard /> */}
                <Contact contactRef={contact}/> 
            </div>
        </div>
    )
}

export default Landing
