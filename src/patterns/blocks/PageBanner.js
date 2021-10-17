import React from 'react'

function PageBanner(props) {
    const {title} = props;

    return (
        <div className="main-text text-bold w-full h-60 grid place-items-center page-banner text-8xl">
            {title}
        </div>
    )
}

export default PageBanner
