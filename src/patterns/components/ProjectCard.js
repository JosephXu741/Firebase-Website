import React, {useEffect, useRef} from 'react'
import lottie from "lottie-web"
import anime from "animejs"
import Animation from "../../assets/structs.json"
import PinButton from "../atoms/PinButton"
import {openInNewTab} from "../../helpers/helpers"

function ProjectCard(props) {
    const {alternate, content} = props;
    const controls = useRef()
    const pin = useRef()
    const projectDiv = useRef()

    useEffect(() => {
        const container = document.querySelector("#structs")
        controls.current = lottie.loadAnimation({
            container: container,
            renderer: 'canvas',
            animationData: Animation,
            loop: false,
            autoplay: false,
        })

        projectDiv.current.addEventListener("mouseenter", () => {
            anime.remove(pin.current)
            anime({
                targets: pin.current,
                translateX: 30,
                duration: 100,
                easing: "spring"
            })
        })
        projectDiv.current.addEventListener("mouseleave", () => {
            anime.remove(pin.current)
            anime({
                targets: pin.current,
                translateX: 0,
                duration: 300,
                easing: "linear"
            })
        })

    }, [])

    const handleEnter = () => {
        controls.current.setDirection(1);
        controls.current.play();
    }    
    const handleLeave = () => {
        controls.current.setDirection(-1);
        controls.current.play();
    }    


    return (
        <div 
            ref={projectDiv}
            className={`contentClamp projectCardWrapper grid place-items-center relative flex-wrap my-10 ${alternate ? "justify-end" : ""}`} 
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <div  
                className="items-center absolute top-0 left-0 w-full z-10" 
                id="structs"   
                onClick={() => openInNewTab('https://structs.netlify.app/')} 
            >
            </div>
            <div className="lg:pl-12 w-full z-10 h-1/2 flex md:items-center items-start self-end justify-start justify-self-start md:w-1/2 md:h-full">
                <div className="p-4 grid z-10">
                    <div className="main-text text-6xl mb-4 md:text-white text-black" > 
                        {content.title}
                    </div>
                    <div className="body-text hidden sm:grid text-base md:text-lg mb-8 md:text-white text-black" >
                        {content.body}
                    </div>
                    <div ref={pin}>
                        <div className=" w-12 h-12 transform -rotate-45"><PinButton color="#FF6060" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

