import React, { useState } from 'react'

const firstUser = {
    id : 101,
    firstName:"Rama",
    lastName:"Krishna",
    city:"Chennai",
    state:"Tamilnadu",
    email:"rama@gmail.com",
    admin:false
}

export default function Demo2() {
    const[user,setUser] = useState(firstUser)
  return (
    <div>
      <h3>{user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}</h3>
      <h3>{user.email}  {user.city}</h3>
      <button onClick={() => setUser({...user,admin:true})}>
        Make me an Admin
    </button>
    </div>
  )
}
