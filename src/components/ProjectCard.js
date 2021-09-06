import React, {useEffect} from 'react'
import "../styles/ProjectCard.css"
import lottie from "lottie-web"
import Animation from "../Animations/no-glass-20001-0030.mp4.lottie.json"

function ProjectCard(props) {
    const {alternate} = props;
    let controls = null;

    useEffect(() => {
        controls = lottie.loadAnimation({
            container: document.querySelector("#structs"),
            animationData: Animation,
            loop: false,
            autoplay: false,
        })
    }, [])

    const handleEnter = () => {
        lottie.setDirection(1);
        controls.play();
    }    
    const handleLeave = () => {
        lottie.setDirection(-1);
        controls.play();
    }    


    return (
        <div className={`p-card ${alternate ? "justify-end" : ""}`} >
            <div  
                className="display" 
                id="structs"    
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
            </div>
            <div className="p-textbox">

                <div className="p-text">
                    <div className=" text-6xl mb-12" > 
                        Project 01
                    </div>
                    <div className=" hidden sm:grid text-base md:text-lg md:mb-8" >
                        Created by a group of passionate students, Project 01 is the
                        amalgamation of ideas and innovations new to the technology world. 
                        It aims to break boundaries and aspiries to continually
                        transform what we believe is the ground truth
                    </div>
                    
                    <div className="arrow bg-blue-600">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
