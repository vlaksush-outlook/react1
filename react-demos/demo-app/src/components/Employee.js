import React from 'react'

export default function Employee({ emp }) {
  return (
    <div>
      <h3> {emp.name} Detail</h3>
      <p>{emp.id} - {emp.name} - {emp.salary}</p>
      <h5>Projects</h5>
      <ul>
        {
          emp.projects.map((project) => (
            <li>{project}</li>
          ))
        }
      </ul>    </div>
  )
}
