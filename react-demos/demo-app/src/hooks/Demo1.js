import React, { useEffect, useState } from 'react'

export default function Demo1() {
    const [val,setVal] = useState();
    const [phrase,setPhrase] = useState("demo phrase");

    const createPhrase = () => {
        setPhrase(val);
        setVal("")
    }

    useEffect(() =>{ 
        console.log(`typing ${val}`)
    },[val])

    useEffect( () => {
        console.log(`saved phrase ${phrase}`)
    },[phrase])

  return (
    <div>
    <input 
    type="text"
    value={val}
    placeholder={phrase}
    onChange={(e) => setVal(e.target.value)}
    />
    <button onClick={createPhrase}>Send</button>
    </div>
  )
}
