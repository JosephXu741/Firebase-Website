import React from 'react'
import Navbar from '../partials/Navbar'
import ProjectDetailTitle from '../blocks/ProjectDetailTitle'
import ProjectBrief from '../blocks/ProjectBrief'
import ProjectContent from '../blocks/ProjectContent'

function ProjectDetail() {
    return (
        <div className="h-auto flex justify-items-center z-50 bg-blue-100">
            <Navbar />
            <div className="grid w-full justify-items-center">
                <ProjectDetailTitle />
                <ProjectBrief />
                <ProjectContent />
            </div>
        </div>
    )
}

export default ProjectDetail
