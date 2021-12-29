import React, {useState, useEffect} from 'react'
import ProjectCard from '../components/ProjectCard'
import {GetProjects} from '../../helpers/projects'

function ProjectCardsWrapper() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        (async () => {
            const results = await GetProjects()
            setProjects(results)
            window.scrollTo(0, 0)
        })()
    }, [])

    return (
        <div className="h-auto min-w-full grid justify-items-center">
            {projects.map(proj => 
                <ProjectCard content={proj} />
            )}
        </div>
    )
}

export default ProjectCardsWrapper
