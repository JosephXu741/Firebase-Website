import React from 'react'
import Navbar from "../partials/Navbar"
import PageBanner from "../blocks/PageBanner"
import MoreProjectCards from '../blocks/MoreProjectCards'
import {more_projects_data} from "../../store/context"
import FadeInWrapper from '../utils/FadeInWrapper'
import GoBack from '../atoms/GoBack'

function MoreProjects() {
    document.body.style = `background: white;`

    return (
        <FadeInWrapper className="grid w-screen place-items-center">
            <Navbar />
            <div className="contentClamp">
                <PageBanner title={"Other Endeavours"}/>
                <MoreProjectCards cards={more_projects_data} />
            </div>
            <GoBack />
        </FadeInWrapper>
    )
}

export default MoreProjects
