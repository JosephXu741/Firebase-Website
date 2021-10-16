import React from 'react'

function PageBanner(props) {
    const {title} = props;

    return (
        <div className="w-full h-60 grid place-items-center page-banner bg-green-100 text-6xl">
            {title}
        </div>
    )
}

export default PageBanner
