import React, {useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom'
import anime from 'animejs'

function GoBack() {
    const history = useHistory()
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.addEventListener("mouseenter", () => {
            anime.remove(".one .two .three")
            anime({
                targets: ".one",
                translateX: "-40px",
                opacity: 0
            })
            anime({
                targets: ".two",
                translateX: "-40px"
            })
            anime({
                targets: ".three",
                translateX: "-90px",
                opacity: 1
            })
        })
        buttonRef.current.addEventListener("mouseleave", () => {
            anime.remove(".one .two .three")
            anime({
                targets: ".one",
                translateX: "40px",
                opacity: 1
            })
            anime({
                targets: ".two",
                translateX: "40px"
            })
            anime({
                targets: ".three",
                translateX: "90px",
                opacity: 0
            })
        })
    })

    return (
        <button 
            onClick={() => {history.goBack()}}
            className="fixed bottom-4 left-4 md:bottom-16 md:left-16 w-36 h-20"
            ref={buttonRef}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359 144" fill="none">
            <path className="one" d="M78.7381 121.439C82.6323 125.342 82.5924 131.696 78.6489 135.63C74.7054 139.565 68.3517 139.591 64.4574 135.689L8.04823 79.1559C4.15399 75.2532 4.19391 68.8995 8.13739 64.9646C12.0809 61.0298 18.4346 61.0037 22.3289 64.9065L78.7381 121.439Z" stroke="#FF6060" stroke-width="6"/>
            <path className="one" d="M22.0679 78.9855C18.1207 82.9166 11.767 82.9365 7.87658 79.0299C3.98618 75.1233 4.03227 68.7696 7.97954 64.8385L65.1569 7.89583C69.1042 3.96475 75.4578 3.9449 79.3483 7.8515C83.2387 11.7581 83.1926 18.1118 79.2453 22.0428L22.0679 78.9855Z" stroke="#FF6060" stroke-width="6"/>
            <path className="two" d="M159.906 121.716C163.8 125.619 163.76 131.973 159.817 135.907C155.873 139.842 149.52 139.868 145.625 135.966L89.2162 79.4329C85.322 75.5301 85.3619 69.1765 89.3054 65.2416C93.2488 61.3067 99.6026 61.2807 103.497 65.1835L159.906 121.716Z" stroke="#706DFF" stroke-width="6"/>
            <path className="two" d="M103.236 79.2625C99.2886 83.1936 92.935 83.2134 89.0445 79.3068C85.1541 75.4003 85.2002 69.0466 89.1475 65.1155L146.325 8.1728C150.272 4.24173 156.626 4.22188 160.516 8.12847C164.407 12.0351 164.361 18.3887 160.413 22.3198L103.236 79.2625Z" stroke="#706DFF" stroke-width="6"/>
            <path className="three opacity-0" d="M293.906 121.716C297.8 125.619 297.76 131.973 293.817 135.907C289.873 139.842 283.52 139.868 279.625 135.966L223.216 79.4329C219.322 75.5301 219.362 69.1765 223.305 65.2416C227.249 61.3067 233.603 61.2807 237.497 65.1835L293.906 121.716Z" stroke="#FF6060" stroke-width="6"/>
            <path className="three opacity-0" d="M237.236 79.2625C233.289 83.1936 226.935 83.2134 223.045 79.3068C219.154 75.4003 219.2 69.0466 223.148 65.1155L280.325 8.1728C284.272 4.24173 290.626 4.22188 294.516 8.12847C298.407 12.0351 298.361 18.3887 294.413 22.3198L237.236 79.2625Z" stroke="#FF6060" stroke-width="6"/>
        </svg>
        </button>
    )
}

export default GoBack
