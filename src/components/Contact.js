import React, { useEffect, useRef } from 'react'
import anime from "animejs"

import "../styles/Contact.css"

function Contact() {

    const footerBackground = useRef();

    useEffect(() => {
        footerBackground.current.style.opacity = 0;
        footerBackground.current.style.height = document.body.scrollHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > document.body.scrollHeight - window.outerHeight - 200) {
                if (footerBackground.current.style.opacity < 1) {
                    anime({
                        targets: footerBackground.current,
                        opacity: 1
                    })
                }
            } else {
                if (footerBackground.current.style.opacity > 0) {
                    anime({
                        targets: footerBackground.current,
                        opacity: 0
                    })
                }
            }
        })
    }, [])

    return (
        <div className="footer relative">
            <div className="footer-background absolute bottom-0 w-full h-full" ref={footerBackground} />
            <div className="profile-wrapper">
                <div className="profile ">
                    <div className="footer-headline ">
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
