import React, { useState } from 'react'
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import colorData from '../demo2/color-data.json'
import { v4 } from 'uuid'

export default function ColorHome() {
    const [colors, setColors] = useState(colorData);

    const removeColor = (id) => {
        const newColors = colors.filter(color => color.id !== id)
        setColors(newColors);
    }

    const rateColor = (id, rating) => {
        const newColors = colors.map(color =>
            color.id == id ? { ...color, rating } : color
        )
        setColors(newColors);
    }

    /*
    color => 101 fav1 red 2
    color => 102 fav2 green 3
    color => 103 fav3 blue 2
    */

    const createColor = (title, color) => {
        const newColors = [
            ...colors,
            {
                id: v4(),
                title: title,
                color: color,
                rating: 0
            }
        ]
        setColors(newColors);
    }





    return (
        <div>
            <div>
                <AddColorForm
                    onNewColor={createColor}
                />

                <ColorList
                    colors={colors}
                    onRemoveColor={removeColor}
                    onRateColor={rateColor}
                />
            </div>
        </div>
    )
}
