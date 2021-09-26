import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.scss"

function Navbar() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        })
    }

    return (
        <div className="nav contentClamp fixed p-4 h-16 z-50 top-0 flex justify-between text-xl">
            <div onClick={scrollTop} className="flex self-center">
                <Link to="/">
                    JX
                </Link>
            </div>
            <div onClick={scrollTop} className="flex flex-row-reverse space-x-4 space-x-reverse self-center">
                <div>
                    <Link to="/">
                        Projects
                    </Link>
                </div>
                <div>
                    <Link to="/more-projects">
                        More Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
