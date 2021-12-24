import React from 'react'

function ProjectDetailTitle(props) {
    const {content} = props

    return (
        <div className="detailTitle contentClamp flex justify-items-center ">
            <div className="w-1/2 h-full grid p-16">
                <h1 className="text-9xl self-end main-text">
                    {content?.title}
                </h1>
                <p className="text-3xl self-center">
                    {content?.brief}
                </p>
            </div>
            <div className="w-1/2 h-full grid place-items-center text-9xl">
                
            </div>
        </div>
    )
}

export default ProjectDetailTitle
