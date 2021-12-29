import React, {useEffect, useRef} from 'react'
import lottie from "lottie-web"
import Animation from "../../assets/structs.json"
import {openInNewTab} from "../../helpers/helpers"
import ExpandAnimation from './ExpandAnimation'
import ExpandButtonWrapper from '../atoms/ExpandButtonWrapper'
import {useHistory} from 'react-router-dom'
import anime from 'animejs'

function ProjectCard(props) {
    const {alternate, content} = props;
    const controls = useRef()
    const projectDiv = useRef()
    const tooltipRef = useRef()
    const expandRef = useRef()
    const history = useHistory()

    useEffect(() => {
        const container = document.querySelector("#structs")
        controls.current = lottie.loadAnimation({
            container: container,
            renderer: 'canvas',
            animationData: Animation,
            loop: false,
            autoplay: false,
        })

        expandRef.current.addEventListener("mouseenter", () => {
            anime.remove(tooltipRef.current)
            anime({
                targets: tooltipRef.current, 
                opacity: 1,
                duration: 5000
            })
        })
        expandRef.current.addEventListener("mouseleave", () => {
            anime.remove(tooltipRef.current)
            anime({
                targets: tooltipRef.current, 
                opacity: 0
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
        >
            <button  
                className="items-center absolute top-0 left-0 w-full z-10" 
                id="structs"   
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={() => openInNewTab(content.link)}
            />
            <div className="lg:pl-12 w-full z-10 h-1/2 flex relative md:items-center items-start self-end justify-start justify-self-start md:w-1/2 md:h-full">
                <div className="p-4 mb-4 grid z-10">
                    <div className="main-text text-6xl mb-4 responsiveColor" > 
                        <button 
                            onClick={() => openInNewTab(content.link)}>
                            {content.title}
                        </button>
                    </div>
                    <div className="body-text hidden sm:grid text-base md:text-lg mb-4 responsiveColor" >
                        {content.abstract} 
                    </div>
                </div>
                <div className="absolute md:right-0 bottom-6 lg:bottom-12 lg:left-12 flex z-30">
                    <ExpandButtonWrapper color={content.color} >
                        <div className="w-20 h-20" ref={expandRef} onClick={
                            () => setTimeout(() => {
                                console.log(content.color)
                                history.push({
                                    pathname: content.id,
                                    state: {color: content.color}
                                })
                            }, 300)}
                        >
                            <ExpandAnimation />
                        </div>
                    </ExpandButtonWrapper>
                    <span ref={tooltipRef} className="place-self-center responsiveColor opacity-0">
                        Find out more!
                    </span>
                </div> 
            </div>
        </div>
    )
}

export default ProjectCard

