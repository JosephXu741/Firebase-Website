import React, {useRef, useEffect} from 'react'
import anime from 'animejs'

function WipeButtonWrapper({children, color, ...props}) {
    const expandDiv = useRef(null)
    const expandButton = useRef(null)

    useEffect(() => {
        expandButton.current.addEventListener("click", () => {
            const timeline = anime.timeline({
                duration: 200
            })
            timeline.add({
                targets: expandDiv.current,
                width: '10px',
                height: '10px',
                duration: 1,
                background: color
            })
            timeline.add({
                targets: expandDiv.current,
                scale: 400,
                easing: 'linear',
                duration: 300
            })
        })
    })

    return (
        <div className="relative" ref={expandButton}>
            <button {...props}>
                {children}
            </button>
            <div className="absolute rounded-full " ref={expandDiv}/>
        </div>
    )
}

export default WipeButtonWrapper
