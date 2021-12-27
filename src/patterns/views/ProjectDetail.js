import React, {useState, useEffect} from 'react'
import Navbar from '../partials/Navbar'
import ProjectDetailTitle from '../blocks/ProjectDetailTitle'
import ProjectBrief from '../blocks/ProjectBrief'
import ProjectContent from '../blocks/ProjectContent'
import {GetProjectRender} from '../../helpers/projects'
import {useLocation} from 'react-router-dom'
import { motion } from "framer-motion"

// import ProjectNotFound from './ProjectNotFound'

function ProjectDetail(props) {
    const [content, setContent] = useState(null)
    const id = props.match.params.id
    const location = useLocation()

    if (location.state) {
        document.body.style = `background: ${location.state.color};`
    }

    useEffect(() => {
        (async () => {
            const results = await GetProjectRender(id)
            setContent(results)
            console.log(results)
            if (results) {
                document.body.style = `background: ${results.color};`
            }
        })()
    }, [id])

    return (
        <motion.div 
            className={`projectDetails h-full flex justify-items-center z-50 text-white`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ ease: "easeIn", duration: 2 }}
        >
            <Navbar />
                <div className="grid w-full justify-items-center">
                    <ProjectDetailTitle content={content} />
                    <ProjectBrief content={content} />
                    <ProjectContent content={content} />
                </div> 
        </motion.div>
    )
}

export default ProjectDetail
