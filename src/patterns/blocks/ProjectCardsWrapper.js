import React, {useState, useEffect} from 'react'
import ProjectCard from '../components/ProjectCard'
import {GetProjects} from '../../helpers/projects'

function ProjectCardsWrapper() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        (async () => {
            const results = await GetProjects()
            setProjects(results)
        })()
    }, [])

    return (
        <div className="h-auto grid justify-items-center">
            {projects.map(proj => 
                <ProjectCard content={proj} />
            )}
        </div>
    )
}

export default ProjectCardsWrapper