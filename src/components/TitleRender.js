import React, { useEffect, useRef } from 'react'
import lottie from "lottie-web"
import Animation from "../assets/moon_only0001-0060.mp4.lottie.json"

function TitleRender() {
    const controls = useRef()

    useEffect(() => {
        controls.current = lottie.loadAnimation({
            container: document.querySelector("#moonBox"),
            animationData: Animation,
            loop: false,
            autoplay: false,
        })
    }, [])

    const handleEnter = () => {
        lottie.setDirection(1);
        controls.current.play();
    }    
    const handleLeave = () => {
        lottie.setDirection(-1);
        controls.current.play();
    }    
    return (
        <div
            id="moonBox"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            
        </div>
    )
}

export default TitleRender
