import React from 'react'

function ProjectBrief(props) {
    const {content} = props

    return (
        <div className="grid contentClamp place-items-center py-8">
            <p className="main-text text-3xl grid projectContentClamp mb-4">
                Roles
            </p>
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
