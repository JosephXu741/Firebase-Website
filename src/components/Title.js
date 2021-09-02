import React from 'react'
import "../styles/Title.css"

function Title() {
    return (
        <div className="bg-red-100 grid items-center min-h-screen min-w-full mb-10 md:mb-40">
            <div className="mx-4 grid space-y-8 place-items-center">
                <div className="headline ">
                    Joseph Xu
                    <div className="continue" >

                    </div>
                </div>
                <div className="content " >
                    A Final Year Computer Science Student at UNSW, driven by meaningful work
                </div>
            </div>
        </div>
    )
}

export default Title
