import React, { useEffect, useRef } from 'react'
import {Link} from "react-router-dom"
import anime from "animejs"
import PinButton from './PinButton';

function MoreProjectsButton(props) {
    const ref = useRef();
    const arrowRef = useRef();
    const moreProjButton = useRef()
    const {text} = props

    useEffect(() => {
        moreProjButton.current.addEventListener("mouseenter", () => {
            anime.remove(ref.current)
            anime.remove(arrowRef.current)
            anime({
                targets: ref.current,
                width: "190",
                duration: 150,
                easing: 'cubicBezier(.5, 0, .1, .9)'
            })
            anime({
                targets: arrowRef.current,
                opacity: 1,
                left: 82,
                duration: 150,
                easing: "spring"
            })
        })
        moreProjButton.current.addEventListener("mouseleave", () => {
            anime.remove(ref.current)
            anime.remove(arrowRef.current)
            anime({
                targets: ref.current,
                width: "0",
                duration: 150,
                easing: 'cubicBezier(.5, 0, .1, .0)'
            })
            anime({
                targets: arrowRef.current,
                left: 0,
                opacity: 0,
                duration: 150,
            })
        })
    }, [])


    return (
        <Link to="/more-projects">
            <div className="moreProjectsButton grid relative text-2xl body-text border-2 border-black" ref={moreProjButton}>
                <div className="grid place-content-center w-full h-full">
                    {text}
                </div>
                <div className="moreProjectsPin absolute place-self-center w-8 h-8 z-40 transform -rotate-45" ref={arrowRef}>
                    <PinButton color="white" />
                </div>
                <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 70" fill="none">
                    <rect ref={ref} x="0" y="0" width="0" height="69" fill="black" stroke="black"/>
                </svg>
            </div>
        </Link>
    )
}

export default MoreProjectsButton
