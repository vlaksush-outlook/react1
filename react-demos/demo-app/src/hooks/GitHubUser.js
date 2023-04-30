import React, { useEffect, useState } from 'react'

export default function GitHubUser({ login }) {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error)
    },[login])

    if (data)
        return (
            <div>
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>

                <button onClick={() => alert("button clicked")}>test</button>
            </div>
        )

    return null;

}
