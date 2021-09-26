import React from 'react'
import "./SimpleCard.scss"

function SimpleCard(props) {
    const {data} = props;
    return (
        <div className="simple-card p-12 mb-8 grid relative bg-blue-200">
            <div className="text-4xl self-end">
                {data.title}
            </div>
            <div className="text-md mt-4">
                {data.body}
            </div>
            <div className="absolute top-8 right-8">
                X
            </div>
        </div>
    )
}

export default SimpleCard
