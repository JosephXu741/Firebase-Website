import React, { useEffect, useRef } from 'react'
import "../styles/Title.css"
import arrow from "../Animations/arrow-down-circle.svg"
import anime from "animejs"

function Title() {  

    const backgroundTrigger = useRef()

    useEffect(() => {
        const io = new IntersectionObserver((entry) => {
            const e = entry[0];
            console.log(e.isIntersecting)
            if (e.isIntersecting) {
                anime({
                    targets: document.body,
                    background: "#ADD8E6",
                    duration: 3000,
                })
            } else {
                anime({
                    targets: document.body,
                    background: "#FFF",
                    duration: 3000,
                })
            }
        });
        io.observe(backgroundTrigger.current)
    }, [])

    
    return (
        <div className="heading relative">
            <div className="heading-wrapper">
                <div className="heading-headline" ref={backgroundTrigger} >
                    Joseph Xu
                    <div className="continue" >
                        <img alt="see more" src={arrow} />
                    </div>
                </div>
                <div className="heading-content " >
                    A Final Year Computer Science Student at UNSW, driven by meaningful work
                </div>
            </div>
        </div>
    )
}

export default Title
