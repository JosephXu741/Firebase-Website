import React from 'react'

function ProjectBrief(props) {
    const {content} = props

    return (
        <div className="grid contentClamp place-items-center bg-purple-100 py-8">
            <div className="grid projectContentClamp grid-cols-2">
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
        </div>
    )
}

export default ProjectBrief
