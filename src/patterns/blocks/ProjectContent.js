import React from 'react'

function ProjectContent(props) {
    const {content} = props


    return (
        <div className="grid place-items-center w-full">
            {
                content?.blocks.map(block => {
                    if (block.type === "textBlock") {
                        return <div className="projectContentClamp">{block.data}</div>
                    }
                    else if (block.type === "divider") {
                        return <div className="" >***</div>
                    }
                    else if (block.type === "image") {
                        return <div className="contentClamp"><img className="" alt={block.type} src={block.data} /></div>
                    }
                    else {
                        return <div></div>
                    }
                })
            }
        </div>
    )
}

export default ProjectContent
