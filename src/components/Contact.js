import React, { useEffect, useRef} from 'react'
import anime from "animejs"
import "../styles/Contact.css"

function Contact() {

    const backgroundTrigger = useRef();

    useEffect(() => {
        const io = new IntersectionObserver((entry) => {
            const e = entry[0];
            console.log(e.isIntersecting)
            if (e.isIntersecting) {
                anime({
                    targets: document.body,
                    background: "#FFD580",
                    duration: 3000,
                })
            } else {
                anime({
                    targets: document.body,
                    background: "#FFF",
                    duration: 3000,
                })
            }
        });
        io.observe(backgroundTrigger.current)
    }, [])

    return (
        <div className="footer relative">
            <div className="profile-wrapper">
                <div className="profile ">
                    <div className="footer-headline " ref={backgroundTrigger} >
                        Say Hello!
                    </div>
                    <div className="footer-content " >
                        joseph499@hotmail.com
                    </div>
                </div>
                <div className="icons-container">

                </div>
            </div>
        </div>
    )
}

export default Contact
