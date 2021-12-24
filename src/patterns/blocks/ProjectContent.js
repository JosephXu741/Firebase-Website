import React from 'react'

function ProjectContent(props) {
    const {content} = props


    return (
        <div className="grid place-items-center w-full">
            {
                content?.blocks.map(block => {
                    if (block.type === "textBlock") {
                        return <div className="projectContentClamp my-4">
                                    <p className="main-text text-3xl mb-4" >{block.title}</p>
                                    <p>{block.data}</p>
                                </div>
                    }
                    else if (block.type === "divider") {
                        return <div className="" >***</div>
                    }
                    else if (block.type === "image") {
                        return <div className="projectContentClamp my-20">
                                    <img className="mb-4" alt={block.type} src={block.data} />
                                    <p className="grid place-items-center" >{block.title}</p>
                                </div>
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
