import React, {useEffect, useRef} from 'react'
import anime from "animejs"

function RevealButton(props) {
    const {color} = props
    const pin = useRef();
    const button = useRef();

    useEffect(() => {
        anime.set(".svg path", {strokeDashoffset: anime.setDashoffset});
        button.current.addEventListener("mouseenter", () => {
            anime.remove(pin.current)
            anime.remove("#explore")
            anime({
                targets: pin.current,
                rotate: "-45"
            })
            anime({
                targets: "#explore",
                opacity: 1,
                easing: 'easeInCubic',
                duration: 500,
            })
        })
        button.current.addEventListener("mouseleave", () => {
            anime.remove(pin.current)
            anime.remove("#explore")
            anime({
                targets: pin.current,
                rotate: "45"
            })
            anime({
                targets: "#explore",
                opacity: 0,
                easing: 'linear',
                duration: 200,
            })
        })
    })

    return (
        <div ref={button} className="flex items-center text"> 
            <div className="revealPin w-12 h-12">
                <svg ref={pin} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 51H29C16.8497 51 7 41.1503 7 29C7 16.8497 16.8497 7 29 7C41.1503 7 51 16.8497 51 29V51ZM54 56C55.1046 56 56 55.1046 56 54V29C56 14.0883 43.9117 2 29 2C14.0883 2 2 14.0883 2 29C2 43.9117 14.0883 56 29 56H54Z" fill={`${color}`} stroke={`${color}`} stroke-width="4" stroke-linejoin="round"/>
                </svg>
            </div>
            <div id="explore" className="ml-4 w-40 h-12 flex items-center text-4xl">
                <span className="body-text font-bold">
                    Explore!
                </span>
            </div>

        </div>
    )
}

export default RevealButton


