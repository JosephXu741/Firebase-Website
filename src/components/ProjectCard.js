import React from 'react'
import "../styles/ProjectCard.css"

function ProjectCard(props) {
    const {alternate} = props
    return (
        <div className={`bg-green-100 p-card ${alternate ? "justify-end" : ""}`} >
            <div className="display bg-purple-200">

            </div>
            <div className=" bg-green-300 p-textbox">

                <div className="p-text bg-green-500">
                    Project card
                    
                    <div className="arrow bg-blue-600">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
