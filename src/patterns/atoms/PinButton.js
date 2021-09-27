import React from 'react'
import Pin from "../../assets/Pin.svg"

function PinButton() {
    return (
        <div className="w-12 h-12">
            <img alt="X" className="transform -rotate-90" src={Pin} /> 
        </div>
    )
}

export default PinButton
