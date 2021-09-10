import React from 'react'
import "../styles/Navbar.css"

function Navbar() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        })
    }

    return (
        <div className="nav text-xl">
            <div onClick={scrollTop} className="nav-logo">
                JX
            </div>
            <div onClick={scrollTop} className="nav-right">
                <div>
                    Projects
                </div>
            </div>
        </div>
    )
}

export default Navbar
