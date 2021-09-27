import React from 'react'
import "./MoreProjectCards.scss"
import SimpleCard from "../components/SimpleCard"

function MoreProjectCards(props) {
    const {cards} = props;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 bg-red-200">
            {cards.map(card => 
                <SimpleCard key={card.id} data={card}/>
            )}
        </div>
    )
}

export default MoreProjectCards
