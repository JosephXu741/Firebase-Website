import React, {useEffect, useRef} from 'react'
import lottie from "lottie-web"
import Animation from "../../assets/structs.json"
import {openInNewTab} from "../../helpers/helpers"
import ExpandAnimation from './ExpandAnimation'
import SwipeButton from '../atoms/SwipeButton'

function ProjectCard(props) {
    const {alternate, content} = props;
    const controls = useRef()
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
        >
            <div  
                className="items-center absolute top-0 left-0 w-full z-10" 
                id="structs"   
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
            </div>
            <div className="lg:pl-12 w-full z-10 h-1/2 flex relative md:items-center items-start self-end justify-start justify-self-start md:w-1/2 md:h-full">
                <div className="p-4 grid z-10">
                    <div className="main-text text-6xl mb-4 responsiveColor" > 
                        {content.title}
                    </div>
                    <div className="body-text hidden sm:grid text-base md:text-lg mb-8 responsiveColor" >
                        {content.body}
                    </div>
                    <div 
                        className="responsiveColor w-full h-20 text-base md:text-lg grid place-items-center pr-8"
                        onClick={() => openInNewTab('https://structs.netlify.app/')} 
                    >
                        <SwipeButton text="Visit Site!" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 lg:bottom-12 lg:left-12 w-20 h-20 flex">
                    <ExpandAnimation text="Find out more!" />
                </div> 
            </div>
        </div>
    )
}

export default ProjectCard

