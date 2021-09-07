import React, { useEffect, useRef } from 'react'
import "../styles/Title.css"
import arrow from "../Animations/arrow-down-circle.svg"
import anime from "animejs"

function Title() {  

    const background = useRef()

    useEffect(() => {
        background.current.style.height = document.body.scrollHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                if (background.current.style.opacity > 0) {
                    anime({
                        targets: background.current,
                        opacity: 0
                    })
                }
            } else {
                if (background.current.style.opacity < 1) {
                    anime({
                        targets: background.current,
                        opacity: 1
                    })
                }
            }
        })
    }, [])
    
    return (
        <div className="heading relative">
            <div className="background absolute top-0 w-full h-full" ref={background} />
            <div className="heading-wrapper">
                <div className="heading-headline ">
                    Joseph Xu
                    <div className="continue" >
                        <img alt="see more" src={arrow} />
                    </div>
                </div>
                <div className="heading-content " >
                    A Final Year Computer Science Student at UNSW, driven by meaningful work
                </div>
            </div>
        </div>
    )
}

export default Title
