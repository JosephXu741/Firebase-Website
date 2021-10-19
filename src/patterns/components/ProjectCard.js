import React, {useState, useEffect, useRef} from 'react'
import lottie from "lottie-web"
import anime from "animejs"
import Animation from "../../assets/structs.json"
import PinButton from "../atoms/PinButton"
// import ProjectList from './ProjectList'
import {openInNewTab} from "../../helpers/helpers"

function ProjectCard(props) {
    const {alternate, content} = props;
    const controls = useRef()
    const pin = useRef()
    const projectDiv = useRef()

    const [flipped, setFlipped] = useState(1)

    useEffect(() => {
        const container = document.querySelector("#structs")
        controls.current = lottie.loadAnimation({
            container: container,
            renderer: 'canvas',
            animationData: Animation,
            loop: false,
            autoplay: false,
        })

        pin.current.addEventListener("mouseenter", () => {
            console.log(flipped)
            anime.remove(pin.current)
            anime({
                targets: pin.current,
                translateX: `-=${10 * flipped}`,
                duration: 500,
                easing: 'easeOutQuint'
            })
        })
        pin.current.addEventListener("mouseleave", () => {
            anime.remove(pin.current)
            anime({
                targets: pin.current,
                translateX: `+=${10 * flipped}`,
                duration: 50,
                easing: "linear"
            })
        })

        // pin.current.addEventListener("click", () => {
        //     anime.remove(pin.current)
        //     if (flipped) {
        //         anime({
        //             targets: pin.current,
        //             translateX: 0,
        //             duration: 100,
        //             easing: "linear"
        //         })
        //     } else {
        //         anime({
        //             targets: pin.current,
        //             translateX: 200,
        //             duration: 100,
        //             easing: "linear"
        //         })
        //     }
        // })

    }, [flipped])

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
            <div className="lg:pl-12 p-4 w-full z-10 h-1/2 flex relative md:items-center items-start self-end justify-start justify-self-start md:w-1/2 md:h-full">
                <div className="p-4 grid z-10">
                    <div className="main-text text-6xl mb-4 responsiveColor" > 
                        {content.title}
                    </div>
                    <div className="body-text hidden sm:grid text-base md:text-lg mb-8 responsiveColor" >
                        {content.body}
                    </div>
                </div>
                {/* <ProjectList content={content.description} /> */}
                <div className="absolute bottom-10 flex p-4">
                    <div className="w-12 h-12" ref={pin} onClick={() => setFlipped(!flipped)}>
                        <div className="transform -rotate-45"><PinButton color="#FF6060" /></div>
                    </div>
                    <div className="responsiveColor text-base md:text-lg ml-4 grid place-self-center">Visit Site</div>
                </div> 
            </div>
        </div>
    )
}

export default ProjectCard

