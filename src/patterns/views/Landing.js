import React, { useEffect, useRef} from 'react'
import anime from "animejs"
import {Link} from 'react-router-dom'
import Title from '../blocks/Title'
import Contact from '../blocks/Contact'
import Navbar from '../partials/Navbar'
import SwipeButton from '../atoms/SwipeButton'
import ProjectCardsWrapper from '../blocks/ProjectCardsWrapper'
import FadeInWrapper from '../utils/FadeInWrapper'

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
                changeBackground("#706DFF") :
                changeBackground("#eaeaea")
        });
        io.observe(title.current)
        io.observe(contact.current)
    })

    const changeBackground = (color) => {
        anime({
            targets: document.body,
            background: color,
            duration: 500,
            easing: "linear"
        })
    }

    return (
        <FadeInWrapper className="Landing">
            <div className="h-auto grid justify-items-center z-50 ">
                <Navbar />
                <Title titleRef={title}/>
                <ProjectCardsWrapper />
                <Link to="/more-projects">
                    <div className="w-48">
                        <SwipeButton className="w-full box-content border-black border-2" color="black" pin="white" text="More Projects" />
                    </div>
                </Link>
                <Contact contactRef={contact}/> 
            </div>
        </FadeInWrapper>
    )
}

export default Landing
