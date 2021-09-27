import React, {useEffect, useRef} from 'react'
import Pin from "../../assets/Pin.svg"
import anime from "animejs"
import "./RevealButton.scss"

function RevealButton() {
    const pin = useRef();
    const button = useRef();

    useEffect(() => {
        anime.set(".svg path", {strokeDashoffset: anime.setDashoffset});
        button.current.addEventListener("mouseenter", () => {
            anime.remove(pin.current)
            anime.remove(".svg path")
            anime({
                targets: pin.current,
                rotate: "-45"
            })
            anime({
                targets: ".svg path",
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'linear',
                duration: 500,
                delay: function(el, i) { return i * 50 },
            })
        })
        button.current.addEventListener("mouseleave", () => {
            anime.remove(pin.current)
            anime.remove(".svg path")
            anime({
                targets: pin.current,
                rotate: "45"
            })
            anime({
                targets: ".svg path",
                strokeDashoffset: [0, anime.setDashoffset],
                easing: 'linear',
                duration: 500,
                delay: function(el, i) { return i * 50 },
            })
        })
    })

    // useEffect(() => {
    //     anime({
    //         targets: ".svg path",
    //         strokeDashoffset: [anime.setDashoffset, 0],
    //         easing: 'linear',
    //         duration: 1500,
    //         delay: function(el, i) { return i * 150 },
    //     })
    // })

    return (
        <div ref={button} className="flex items-center text"> 
            <div className="w-12 h-12">
                <img ref={pin} className="transform rotate-45" alt={"pee"} src={Pin} />
            </div>
            <div className="ml-4 w-40 h-12 flex items-center">
            <svg className="svg" viewBox="0 0 227 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="227" height="40" fill="black">
                <rect fill="white" width="227" height="40"/>
                <path d="M3 31.416V26.616H9.432V29.448L11.016 31.032H20.952L22.584 29.4V23.832L21 22.248H8.28L3.096 17.064V8.184L8.28 3H23.448L28.632 8.184V13.032H22.2V10.152L20.616 8.568H11.112L9.528 10.152V15.096L11.112 16.68H23.832L29.016 21.864V31.32L23.736 36.6H8.184L3 31.416Z"/>
                <path d="M33.3281 31.704V17.688L38.2721 12.696H51.7601L56.7521 17.688V26.76H39.6641V29.832L41.2001 31.416H49.0241L50.4641 29.928V28.68H56.7041V31.8L51.9521 36.6H38.1761L33.3281 31.704ZM50.4161 22.344V19.56L48.7841 17.88H41.2961L39.6641 19.56V22.344H50.4161Z"/>
                <path d="M61.3125 31.704V17.688L66.2565 12.696H79.7445L84.7365 17.688V26.76H67.6485V29.832L69.1845 31.416H77.0085L78.4485 29.928V28.68H84.6885V31.8L79.9365 36.6H66.1605L61.3125 31.704ZM78.4005 22.344V19.56L76.7685 17.88H69.2805L67.6485 19.56V22.344H78.4005Z"/>
                <path d="M103.095 3H109.143L119.127 24.696H119.223L129.255 3H135.303V36.6H129.015V16.152H128.919L121.191 31.896H117.159L109.479 16.152H109.383V36.6H103.095V3Z"/>
                <path d="M140.812 31.608V17.688L145.757 12.696H159.485L164.429 17.688V31.608L159.485 36.6H145.757L140.812 31.608ZM156.413 31.32L158.093 29.64V19.656L156.413 17.976H148.829L147.149 19.656V29.64L148.829 31.32H156.413Z"/>
                <path d="M169.699 12.696H175.555V16.68L179.395 12.696H186.211V18.072H180.691L176.035 22.872V36.6H169.699V12.696Z"/>
                <path d="M187.641 31.704V17.688L192.585 12.696H206.073L211.065 17.688V26.76H193.977V29.832L195.513 31.416H203.337L204.777 29.928V28.68H211.017V31.8L206.265 36.6H192.489L187.641 31.704ZM204.729 22.344V19.56L203.097 17.88H195.609L193.977 19.56V22.344H204.729Z"/>
                <path d="M216.537 9.432V3H223.065V9.432L222.297 26.904H217.305L216.537 9.432ZM216.105 34.536V31.656L218.169 29.592H221.433L223.497 31.656V34.536L221.433 36.6H218.169L216.105 34.536Z"/>
                </mask>
                <path d="M3 31.416V26.616H9.432V29.448L11.016 31.032H20.952L22.584 29.4V23.832L21 22.248H8.28L3.096 17.064V8.184L8.28 3H23.448L28.632 8.184V13.032H22.2V10.152L20.616 8.568H11.112L9.528 10.152V15.096L11.112 16.68H23.832L29.016 21.864V31.32L23.736 36.6H8.184L3 31.416Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
                <path d="M33.3281 31.704V17.688L38.2721 12.696H51.7601L56.7521 17.688V26.76H39.6641V29.832L41.2001 31.416H49.0241L50.4641 29.928V28.68H56.7041V31.8L51.9521 36.6H38.1761L33.3281 31.704ZM50.4161 22.344V19.56L48.7841 17.88H41.2961L39.6641 19.56V22.344H50.4161Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
                <path d="M61.3125 31.704V17.688L66.2565 12.696H79.7445L84.7365 17.688V26.76H67.6485V29.832L69.1845 31.416H77.0085L78.4485 29.928V28.68H84.6885V31.8L79.9365 36.6H66.1605L61.3125 31.704ZM78.4005 22.344V19.56L76.7685 17.88H69.2805L67.6485 19.56V22.344H78.4005Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
                <path d="M103.095 3H109.143L119.127 24.696H119.223L129.255 3H135.303V36.6H129.015V16.152H128.919L121.191 31.896H117.159L109.479 16.152H109.383V36.6H103.095V3Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
                <path d="M140.812 31.608V17.688L145.757 12.696H159.485L164.429 17.688V31.608L159.485 36.6H145.757L140.812 31.608ZM156.413 31.32L158.093 29.64V19.656L156.413 17.976H148.829L147.149 19.656V29.64L148.829 31.32H156.413Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
                <path d="M169.699 12.696H175.555V16.68L179.395 12.696H186.211V18.072H180.691L176.035 22.872V36.6H169.699V12.696Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
                <path d="M187.641 31.704V17.688L192.585 12.696H206.073L211.065 17.688V26.76H193.977V29.832L195.513 31.416H203.337L204.777 29.928V28.68H211.017V31.8L206.265 36.6H192.489L187.641 31.704ZM204.729 22.344V19.56L203.097 17.88H195.609L193.977 19.56V22.344H204.729Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
                <path d="M216.537 9.432V3H223.065V9.432L222.297 26.904H217.305L216.537 9.432ZM216.105 34.536V31.656L218.169 29.592H221.433L223.497 31.656V34.536L221.433 36.6H218.169L216.105 34.536Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1)"/>
            </svg>



            </div>

        </div>
    )
}

export default RevealButton


