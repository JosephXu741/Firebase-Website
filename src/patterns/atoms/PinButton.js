import React from 'react'

function PinButton(props) {
    const {color} = props
    return (
            <svg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51 51H29C16.8497 51 7 41.1503 7 29C7 16.8497 16.8497 7 29 7C41.1503 7 51 16.8497 51 29V51ZM54 56C55.1046 56 56 55.1046 56 54V29C56 14.0883 43.9117 2 29 2C14.0883 2 2 14.0883 2 29C2 43.9117 14.0883 56 29 56H54Z" fill={`${color}`} stroke={`${color}`} stroke-width="4" stroke-linejoin="round"/>
            </svg>
    )
}

export default PinButton
