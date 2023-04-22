import React from 'react'
import StarRating from './StarRating'

export default function Color({ color }) {
    return (
        <div>
            <h1>{color.title}</h1>
            <div style={{ height: 50,width:50, backgroundColor: color.color }}>
            </div>
           
            <StarRating selectedStars={color.rating} />
        </div>
    )
}
