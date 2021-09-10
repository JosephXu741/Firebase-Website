import React from 'react'
import "../styles/Contact.css"

function Contact(props) {

    const {contactRef} = props

    return (
        <div className="footer relative">
            <div className="profile-wrapper">
                <div className="profile ">
                    <div className="footer-headline" id="footerRef" ref={contactRef} >
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
