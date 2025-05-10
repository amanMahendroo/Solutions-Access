import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import React, { useState } from 'react'

export default function Carousel(props) {

    const [current, setCurrent] = useState(0)
    const [total, setTotal] = useState(props.children.length)

    return (
        <div className="carousel">
            <div className="left" onClick={() => setCurrent((current + total - 1) % total)}><BsChevronLeft /></div>
            <div className="in">
                {props.children.map(
                    (el, i) => <div className={(current==i) ? "item item-active" : "item"}>{el}</div>
                )}
            </div>

            <div className="right" onClick={() => setCurrent((current + 1) % total)}><BsChevronRight /></div>
            <div className="bottom-container">
                {props.children.map(
                    (_, i) => <div key={i} className={(current==i) ? "bottom bottom-active" : "bottom"}></div>
                )}
            </div>
        </div>
    )
}


