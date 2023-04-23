import React from 'react'
import StarRating from './StarRating'
import {FaTrash} from 'react-icons/fa';

export default function Color({ color,onRemove,onRate }) {
    return (
        <div>
            <h1>{color.title}</h1>
            <div style={{ height: 50,width:50, backgroundColor: color.color }}>
            </div>
           
            <StarRating 
            selectedStars={color.rating} 
            onRate= {rating => onRate(color.id,rating)}
            />

            <button onClick={() =>onRemove(color.id)}>
            <FaTrash />
            </button>
        </div>
    )
}
