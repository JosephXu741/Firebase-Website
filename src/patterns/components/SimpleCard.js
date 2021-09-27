import React, {useEffect, useRef} from 'react'
import PinButton from '../atoms/PinButton';
import "./SimpleCard.scss"
import anime from "animejs"

function SimpleCard(props) {
    const {data} = props;
    const ref = useRef(null);
    const card = useRef(null);

    useEffect(() => {
        card.current.addEventListener("mouseenter", () => {
            anime.remove(ref.current)
            anime({
                targets: ref.current,
                opacity: 1,
                translateX: 30,
                translateY: -30,
                duration: 200,
                easing: "spring"
            })
        })
        card.current.addEventListener("mouseleave", () => {
            anime.remove(ref.current)
            anime({
                targets: ref.current,
                opacity: 0,
                translateX: 0,
                translateY: 0,
                duration: 200,
                easing: "spring"
            })
        })
    }, [])

    return (
        <div ref={card} className="simple-card p-12 grid relative bg-blue-200 transition-shadow hover:shadow-xl" >
            <div className="text-4xl self-end">
                {data.title}
            </div>
            <div className="text-md mt-4">
                {data.body}
            </div>
            <div ref={ref} className="opacity-0 absolute top-16 right-16">
                <PinButton />
            </div>
        </div>
    )
}

export default SimpleCard
