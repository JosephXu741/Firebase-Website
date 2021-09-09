import React, { useEffect, useRef } from 'react'
import "../styles/Title.css"
import arrow from "../assets/arrow-down-circle.svg"
import anime from "animejs"
import TitleRender from "./TitleRender"

function Title() {  

    const backgroundTrigger = useRef()
    const titleRender = useRef()

    useEffect(() => {
        const io = new IntersectionObserver((entry) => {
            const e = entry[0];
            console.log(e.isIntersecting)
            if (e.isIntersecting) {
                anime({
                    targets: document.body,
                    background: "#000",
                    duration: 3000,
                })
                anime({
                    targets: titleRender.current,
                    opacity: 1,
                    duration: 3000
                })
            } else {
                anime({
                    targets: document.body,
                    background: "#FFF",
                    duration: 3000,
                })
                anime({
                    targets: titleRender.current,
                    opacity: 0,
                    duration: 3000
                })
            }
        });
        io.observe(backgroundTrigger.current)
    }, [])

    
    return (
        <div className="heading relative">
            <div className="moon w-1/2 aspect-w-10 aspect-h-4 bg-black absolute " ref={titleRender}>
                <TitleRender />
            </div>
            <div className="heading-wrapper">
                <div className="heading-headline text-white" ref={backgroundTrigger} >
                    Joseph Xu
                    <div className="continue" >
                        <img alt="see more" src={arrow} />
                    </div>
                </div>
                <div className="heading-content text-white w-1/2 " >
                    A Final Year Computer Science Student at UNSW, driven by meaningful work
                </div>
            </div>
        </div>
    )
}

export default Title
