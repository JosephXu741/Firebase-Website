import React from 'react'

function ProjectList(props) {

    const {content} = props;

    return (
        <ul className="projList h-2/3 mb-8 ml-8 body-text text-base md:text-white xl:text-xl text-black list-outside list-disc grid content-around">
            {content.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

export default ProjectList
