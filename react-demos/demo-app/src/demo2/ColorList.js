import React from 'react'
import Color from './Color'

export default function ColorList({colors,onRemoveColor,onRateColor}) {
  return (
    <div>
      {
        colors.map(color => (
          <Color 
          key={color.id}  
          color = {color}
          onRemove={onRemoveColor}
          onRate = {onRateColor}
          />
        ))
      }
    </div>
  )
}
