import React, {useEffect, useRef} from 'react'
import "./ProjectCard.scss"
import lottie from "lottie-web"
import anime from "animejs"
import Animation from "../../assets/structs.json"
import PinButton from "../atoms/PinButton"

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
            className={` contentClamp contentHeightClamp grid place-items-center flex-wrap my-10 ${alternate ? "justify-end" : ""}`} 
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <a href="https://structs.netlify.app/">
                <div  
                    className="contentClamp items-center md:absolute z-10" 
                    id="structs"    
                >
                </div>
                <div className="lg:pl-12 w-full z-10 h-1/2 flex md:items-center items-start justify-start justify-self-start md:w-1/2 md:h-full">

                    <div className="p-4 grid z-10">
                        <div className="main-text text-6xl mb-4 text-white" > 
                            {content.title}
                        </div>
                        <div className="body-text hidden sm:grid text-base md:text-lg mb-8 text-white" >
                            {content.body}
                        </div>
                        <div ref={pin}>
                            <PinButton rotation="45" color="#FF6060" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard
