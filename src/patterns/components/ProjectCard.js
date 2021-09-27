import React, {useEffect, useRef} from 'react'
import "./ProjectCard.scss"
import lottie from "lottie-web"
import Animation from "../../assets/no-glass-20001-0030.mp4.lottie.json"
// import RevealButton from '../atoms/RevealButton'

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
            className={`contentClamp contentHeightClamp flex flex-wrap my-10 md:my-20 ${alternate ? "justify-end" : ""}`} 
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <div  
                className="contentClamp items-center md:absolute z-10" 
                id="structs"    
            >
            </div>
            <div className="md:pl-12 w-full z-10 h-1/2 flex md:items-center items-start justify-start md:w-1/2 md:h-full">

                <div className="p-4 grid z-10">
                    <div className=" text-6xl mb-12" > 
                        {content.title}
                    </div>
                    <div className="hidden sm:grid text-base md:text-lg md:mb-8" >
                        {content.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
