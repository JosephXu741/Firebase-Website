import React, { useEffect } from 'react'
import lottie from "lottie-web"
import Animation from "../../assets/moon_only0001-0060.mp4.lottie.json"
import "./TitleRender.scss"

function TitleRender(props) {
    const { controls } = props

    useEffect(() => {
        controls.current = lottie.loadAnimation({
            container: document.querySelector("#moonBox"),
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
