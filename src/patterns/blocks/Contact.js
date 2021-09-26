import React from 'react'
import "./Contact.scss"
import { SocialIcon } from 'react-social-icons';

function Contact(props) {

    const {contactRef} = props

    return (
        <div className="grid place-items-center min-h-screen min-w-full mt-10 md:mt-40 relative">
            <div className="titleClamp mx-4 relative h-full grid justify-items-start items-center">
                <div className="2xl:absolute 2xl:right-1/2 pl-4 grid place-items-center ">
                    <div className="font-sans text-7xl h-auto grid items-center mb-16 md:text-9xl" 
                            id="footerRef" ref={contactRef} 
                        >
                        Let's get in Contact!
                    </div>
                    <div className="justify-self-start text-lg mb-16 md:text-2xl " >
                        Contact@josephx.dev
                    </div>
                </div>
                <div className="h-20 justify-self-start absolute bottom-16 flex space-x-8">
                    <SocialIcon url="https://github.com/JosephXu741" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon url="https://www.linkedin.com/in/josephxu499/" target="_blank" rel="noopener noreferrer" />
                </div>
            </div>
        </div>
    )
}

export default Contact
