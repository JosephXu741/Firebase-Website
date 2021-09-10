import React, {useEffect, useRef} from 'react'
import "../styles/ProjectCard.css"
import lottie from "lottie-web"
import Animation from "../assets/no-glass-20001-0030.mp4.lottie.json"
import arrow from "../assets/corner-down-right.svg"

function ProjectCard(props) {
    const {alternate, content} = props;
    const controls = useRef()

    useEffect(() => {
        controls.current = lottie.loadAnimation({
            container: document.querySelector("#structs"),
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
            className={`p-card ${alternate ? "justify-end" : ""}`} 
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <div  
                className="display" 
                id="structs"    
            >
            </div>
            <div className="p-textbox">

                <div className="p-text">
                    <div className=" text-6xl mb-12" > 
                        {content.title}
                    </div>
                    <div className=" hidden sm:grid text-base md:text-lg md:mb-8" >
                        {content.body}
                    </div>
                    
                    <div className="arrow">
                        <a href={content.link}>
                            <img src={arrow} alt="explore!" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
