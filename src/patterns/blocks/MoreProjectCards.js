import React from 'react'
import SimpleCard from "../components/SimpleCard"

function MoreProjectCards(props) {
    const {cards} = props;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {cards.map(card => 
                <SimpleCard key={card.id} data={card}/>
            )}
        </div>
    )
}

export default MoreProjectCards
