import React from 'react'
import "../styles/Contact.css"
import { SocialIcon } from 'react-social-icons';

function Contact(props) {

    const {contactRef} = props

    return (
        <div className="footer relative">
            <div className="profile-wrapper">
                <div className="profile ">
                    <div className="footer-headline" id="footerRef" ref={contactRef} >
                        Let's get in Contact!
                    </div>
                    <div className="footer-content " >
                        Joseph499@hotmail.com
                    </div>
                </div>
                <div className="icons-container flex space-x-8">
                    <SocialIcon url="https://github.com/JosephXu741" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon url="https://www.linkedin.com/in/josephxu499/" target="_blank" rel="noopener noreferrer" />
                </div>
            </div>
        </div>
    )
}

export default Contact
