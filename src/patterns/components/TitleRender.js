import React, { useEffect } from 'react'
import lottie from "lottie-web"
import Animation from "../../assets/logo.json"

function TitleRender(props) {
    const { controls } = props

    useEffect(() => {
        controls.current = lottie.loadAnimation({
            container: document.querySelector("#moonBox"),
            renderer: 'svg',
            animationData: Animation,
            loop: false,
            autoplay: false,
        })
    })

    return (
        <div
            id="moonBox"
        >
        </div>
    )
}

export default TitleRender
