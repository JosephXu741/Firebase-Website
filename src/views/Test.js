import React, { useEffect } from 'react'
import lottie from "lottie-web"
import Animation from "../Animations/no-glass-20001-0030.mp4.lottie.json"

function Test() {
    let controls = null

    useEffect(() => {
        controls = lottie.loadAnimation({
            container: document.querySelector("#container"),
            animationData: Animation,
            loop: false,
            autoplay: false,

        })
    }, [])


    const handleClick = () => {
        lottie.setDirection(1)
        controls.play()
    }
    const handleReverse = () => {
        lottie.setDirection(-1)
        controls.play();
    }

    return (
        <div className="grid place-items-center w-full h-full">
            <div className="w-1/2 h-96" id="container">
                
            </div>
            <button onClick={handleClick} >
                Play!
            </button>
            <button onClick={handleReverse} >
                Reverse!
            </button>
        </div>
    )
}

export default Test
