import React from 'react'

function ProjectBrief(props) {
    const {content} = props

    return (
        <div className="grid contentClamp grid-cols-2 bg-purple-100 px-16 py-8">
            {
            content?.experience.map(exp => (
                <div className="mb-12">
                    {exp.title}
                    <ul className="list-disc pl-8">
                        {exp.techs.map(tech => (
                            <li>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
            }
        </div>
    )
}

export default ProjectBrief
