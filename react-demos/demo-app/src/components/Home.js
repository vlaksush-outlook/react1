import { Link } from '@reach/router'
import React from 'react'

export default function Home() {
  return (
    <div>
      Home  |&nbsp;&nbsp; 
      <Link to="github"> Github</Link>  |&nbsp;&nbsp;  
      <Link to="/reducer">Reducer</Link> |&nbsp;&nbsp;  
      <Link to="/color" >Color Organizer</Link> |&nbsp;&nbsp;
      <Link to="/context">Context</Link>|&nbsp;&nbsp;
      <Link to="/hook">Hook</Link>|&nbsp;&nbsp;
      <Link to="/redux">Redux</Link>|&nbsp;&nbsp;
    </div>
  )
}
