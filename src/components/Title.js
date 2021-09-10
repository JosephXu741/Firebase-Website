import React, { useRef } from 'react'
import "../styles/Title.css"
import arrow from "../assets/arrow-down-circle.svg"
import TitleRender from "./TitleRender"

function Title(props) {  

    const {titleRef} = props;
    const titleRender = useRef()
    const controls = useRef()

    const handleEnter = () => {
        controls.current.setDirection(1);
        controls.current.play();
    }    
    const handleLeave = () => {
        controls.current.setDirection(-1);
        controls.current.play();
    }    

    const scrollProj = () => {
        window.scrollTo({
            top: window.innerHeight + 100,
            behavior: "smooth"
        })
    }
    
    return (
        <div className="heading relative">
            <div className="moon w-1/2 aspect-w-10 aspect-h-4 bg-black absolute " ref={titleRender}>
                <TitleRender controls={controls} />
            </div>
            <div className="heading-wrapper">
                <div className="heading-headline text-white" id="headingRef" ref={titleRef} >
                    Joseph Xu
                    <div 
                        className="continue" 
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                    >
                        <img onClick={scrollProj} alt="see more" src={arrow} />
                    </div>
                </div>
                <div className="heading-content text-white w-1/2 " >
                    A Penult Year Computer Science Student at UNSW, driven by meaningful work
                </div>
            </div>
        </div>
    )
}

export default Title
