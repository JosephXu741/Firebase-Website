import React, { useEffect, useRef } from 'react'
import anime from "animejs"
import PinButton from './PinButton';

function MoreProjectsButton({text, color, pin, ...props}) {
    const ref = useRef();
    const arrowRef = useRef();
    const moreProjButton = useRef()

    useEffect(() => {
        moreProjButton.current.addEventListener("mouseenter", () => {
            anime.remove(ref.current)
            anime.remove(arrowRef.current)
            anime({
                targets: ref.current,
                width: "100%",
                duration: 150,
                easing: 'cubicBezier(.5, 0, .1, .9)'
            })
            anime({
                targets: arrowRef.current,
                opacity: 1,
                left: '35%',
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
        <div className="aspect-w-3 aspect-h-1 grid relative body-text">
            <div {...props} ref={moreProjButton}>
                <div className="grid place-content-center w-full h-full">
                    {text}
                </div>
                <div className="absolute top-1/4 self-center w-1/5 h-1/5 z-40 opacity-0" ref={arrowRef}>
                    <div className="w-full h-full transform -rotate-45">
                        <PinButton color={pin} />
                    </div>
                </div>
                <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 68" fill="none">
                    <rect ref={ref} x="0" y="0" width="0" height="100%" fill={color} stroke={color}/>
                </svg>
            </div>
        </div>
    )
}

export default MoreProjectsButton
