import React from 'react'
import Navbar from "../partials/Navbar"
import PageBanner from "../blocks/PageBanner"
import MoreProjectCards from '../blocks/MoreProjectCards'
import {more_projects_data} from "../../store/projects"

function MoreProjects() {

    return (
        <div className="grid w-screen place-items-center">
            <div className="contentClamp">
                <Navbar />
                <PageBanner title={"Other Projects"}/>
                <MoreProjectCards cards={more_projects_data} />

            </div>
        </div>
    )
}

export default MoreProjects
