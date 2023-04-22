import React from 'react'
import Color from './Color'

export default function ColorList({colors}) {
  return (
    <div>
      {
        colors.map(color => (
          <Color 
          key={color.id}  
          color = {color} />
        ))
      }
    </div>
  )
}
