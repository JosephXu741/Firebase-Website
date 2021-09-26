import React, { useRef } from 'react'
import "./Title.scss"
import arrow from "../../assets/arrow-down-circle.svg"
import TitleRender from "../components/TitleRender"

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
        <div className="grid items-center min-h-screen min-w-full mb-10 md:mb-40 relative">
            <div className="moon w-1/2 aspect-w-10 aspect-h-4 bg-black absolute " ref={titleRender}>
                <TitleRender controls={controls} />
            </div>
            <div className="titleClamp mx-4 grid space-y-8 justify-self-center place-items-center z-10">
                <div className="heading-content font-sans text-7xl h-auto grid justify-self-start md:text-9xl text-white" 
                        id="headingRef" ref={titleRef} 
                    >
                    Joseph Xu
                    <div 
                        className="w-12 h-12 justify-self-start absolute left-8 bottom-12" 
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                    >
                        <img onClick={scrollProj} alt="see more" src={arrow} />
                    </div>
                </div>
                <div className="text-lg w-1/2 grid md:text-2xl justify-self-start text-white " >
                    A Penult Year Computer Science Student at UNSW, driven by meaningful work
                </div>
            </div>
        </div>
    )
}

export default Title
