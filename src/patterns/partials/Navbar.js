import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.scss"
import Logo from "../../assets/Logo.svg"

function Navbar() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        })
    }

    return (
        <div className="nav titleClamp fixed h-16 z-50 top-0 flex justify-between text-xl">
            <div onClick={scrollTop} className="flex self-center">
                <Link to="/">
                    <img className="w-16 h-16" alt="JX" src={Logo} />
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
