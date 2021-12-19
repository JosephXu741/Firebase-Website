import React, {useState, useEffect} from 'react'
import Navbar from '../partials/Navbar'
import ProjectDetailTitle from '../blocks/ProjectDetailTitle'
import ProjectBrief from '../blocks/ProjectBrief'
import ProjectContent from '../blocks/ProjectContent'
import {GetProjectRender} from '../../helpers/projects'
import ProjectNotFound from './ProjectNotFound'

function ProjectDetail(props) {
    const [content, setContent] = useState(null)
    const id = props.match.params.id

    useEffect(() => {
        (async () => {
            const results = await GetProjectRender(id)
            setContent(results)
        })()
    }, [id])

    return (
        <div className="h-auto flex justify-items-center z-50 bg-blue-100">
            <Navbar />
            {content ?
                <div className="grid w-full justify-items-center">
                    <ProjectDetailTitle content={content} />
                    <ProjectBrief content={content} />
                    <ProjectContent content={content} />
                </div> :
                <ProjectNotFound />
}
        </div>
    )
}

export default ProjectDetail
