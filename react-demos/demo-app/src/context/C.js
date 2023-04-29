import React, { useContext } from 'react'
import NameContext from './mycontext'

export default function C() {
const name = useContext(NameContext);
  return (
    <div>
       <h3>C Component - Org Name is  - {name}</h3>
    </div>
  )
}
