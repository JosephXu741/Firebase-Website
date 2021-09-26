import React from 'react'
import "./MoreProjectCards.scss"
import SimpleCard from "../components/SimpleCard"

function MoreProjectCards(props) {
    const {cards} = props;
    return (
        <div className="w-full flex flex-wrap justify-around bg-red-200">
            {cards.map(card => 
                <SimpleCard data={card}/>
            )}
        </div>
    )
}

export default MoreProjectCards
