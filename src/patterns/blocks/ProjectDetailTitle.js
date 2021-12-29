import React from 'react'
import {openInNewTab} from '../../helpers/helpers'

function ProjectDetailTitle(props) {
    const {content} = props

    return (
        <div className="detailTitle contentClamp flex justify-items-center ">
            <div className="w-1/2 h-full grid md:p-16">
                <h1 className=" text-7xl md:text-8xl lg:text-9xl self-end main-text">
                    <button onClick={() => {openInNewTab(content.link)}}>
                        {content?.title}
                    </button>
                </h1>
                <p className="text-xl md:text-3xl self-center">
                    {content?.brief}
                </p>
            </div>
            <div className="w-1/2 h-full grid place-items-center text-9xl">
                
            </div>
        </div>
    )
}

export default ProjectDetailTitle
