import React from 'react'

export default function Header({title,duration}) {
  return (
    <div>
      Welcome to {title} Application
    <br />
      Duration of this course is {duration}
    </div>
  )
}
