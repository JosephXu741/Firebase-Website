import React, { useEffect, useRef } from 'react'
import anime from 'animejs'
import PinButton from '../atoms/PinButton'

function ExpandAnimation(props) {
    const br = useRef(null)
    const tr = useRef(null)
    const tl = useRef(null)
    const bl = useRef(null)
    // const {text} = props

    useEffect(() => {
        const expandBox = document.getElementById("expandBox")
        expandBox.addEventListener("mouseenter", () => {
            anime.remove(br.current)
            anime.remove(tr.current)
            anime.remove(tl.current)
            anime.remove(bl.current)

            anime({
                targets: br.current,
                top: '75%',
                left: '75%',
                easing: 'linear',
                duration: 200
            })
            anime({
                targets: tr.current,
                bottom: '75%',
                left: '75%',
                easing: 'linear',
                duration: 200
            })
            anime({
                targets: tl.current,
                bottom: '75%',
                right: '75%',
                easing: 'linear',
                duration: 200
            })
            anime({
                targets: bl.current,
                top: '75%',
                right: '75%',
                easing: 'linear',
                duration: 200
            })
        })

        expandBox.addEventListener("mouseleave", () => {
            anime.remove(br.current)
            anime.remove(tr.current)
            anime.remove(tl.current)
            anime.remove(bl.current)

            anime({
                targets: br.current,
                top: '50%',
                left: '50%',
                easing: 'linear',
                duration: 200
            })
            anime({
                targets: tr.current,
                bottom: '50%',
                left: '50%',
                easing: 'linear',
                duration: 200
            })
            anime({
                targets: tl.current,
                bottom: '50%',
                right: '50%',
                easing: 'linear',
                duration: 200
            })
            anime({
                targets: bl.current,
                top: '50%',
                right: '50%',
                easing: 'linear',
                duration: 200
            })
        })


    })

    return (
        <div id="expandBox" className="relative w-full h-full" >
            {/* <div className="grid place-self-center place-items-center w-full h-full">
                {text}
            </div> */}
            <div className="transform rotate-0 w-1/4 h-1/4 absolute top-1/2 left-1/2" ref={br}>
                <PinButton color="#FF6060"/>
            </div>
            <div className="tr transform -rotate-90 w-1/4 h-1/4 absolute bottom-1/2 left-1/2" ref={tr}>
                <PinButton color="#706DFF"/>
            </div>
            <div className="tl transform rotate-180 w-1/4 h-1/4 absolute bottom-1/2 right-1/2" ref={tl}>
                <PinButton color="#FF6060"/>
            </div>
            <div className="bl transform rotate-90 w-1/4 h-1/4 absolute top-1/2 right-1/2" ref={bl}>
                <PinButton color="#706DFF"/>
            </div>
        </div>
    )
}

export default ExpandAnimation
