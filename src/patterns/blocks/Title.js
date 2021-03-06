import React, { Suspense, useRef } from 'react'

const TitleRender = React.lazy(() => import("../components/TitleRender"))

function Title(props) {  

    const {titleRef} = props;
    const titleRender = useRef()
    const controls = useRef()

    const handleEnter = () => {
        controls.current.setDirection(1);
        controls.current.play();
    }    
    const handleLeave = () => {
        controls.current.setDirection(-1);
        controls.current.play();
    }    
    
    return (
        <div className="grid items-center min-h-screen min-w-full mb-10 md:mb-40 relative">
            <div className="moon w-screen absolute top-0" ref={titleRender}>
                <Suspense fallback={<div className="w-full h-full bg-red-200" />}>
                    <TitleRender controls={controls} />
                </Suspense>
            </div>
            <div className="titleClamp flex h-full relative space-y-8 justify-self-center items-center z-10">
                <div className="heading-content block h-auto justify-self-start" 
                        id="headingRef" ref={titleRef} 
                    >
                    <span className="main-text text-7xl md:text-9xl text-black">
                        Joseph Xu
                    </span>
                    <span className="body-text mt-8 text-lg grid md:text-2xl justify-self-start text-black ">
                        A Penult Year Computer Science Student at UNSW, driven by meaningful work
                    </span>
                </div>

            </div>
            <div
                className="absolute w-1/2 h-full right-0 background-red-200 z-40"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            />
        </div>
    )
}

export default Title
