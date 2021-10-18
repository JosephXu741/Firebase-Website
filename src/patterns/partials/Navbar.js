import React from 'react'
import {NavLink} from "react-router-dom"
import Logo from "../../assets/Logo.svg"

function Navbar() {

    return (
        <div className="nav titleClamp fixed h-16 z-50 top-0 flex justify-between text-xl">
            <div className="flex self-center">
                <NavLink to="/">
                    <img className="w-16 h-16" alt="JX" src={Logo} />
                </NavLink>
            </div>
            <div className="flex flex-row-reverse h-full space-x-4 space-x-reverse self-center">
                <div className="body-text place-self-center grid p-4">
                    <NavLink to="/more-projects" activeClassName="selected">
                        Other Projects
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
