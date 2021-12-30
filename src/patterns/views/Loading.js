import React, {useEffect} from 'react'
import lottie from 'lottie-web'
import Animation from "../../assets/Loading.json"

function Loading() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#Loading"),
            renderer: 'svg',
            animationData: Animation,
            loop: true,
            autoplay: true,
        })
    }, [])

    return (
        <div
            id="Loading"
            className="w-screen h-screen"
            style={{backgroundColor: "#706DFF"}}
        />
    )
}

export default Loading
