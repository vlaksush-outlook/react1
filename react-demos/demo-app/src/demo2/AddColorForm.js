import React, { useState } from 'react'

export default function AddColorForm({onNewColor}) {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000")


    const submit = (e) => {
        e.preventDefault();
        onNewColor(title,color)
        setTitle("")
        setColor("#000000")
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    value={title}
                    type="text"
                    placeholder='enter title'
                    required
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    value={color}
                    type="color"
                    placeholder='enter color'
                    required
                    onChange={(event) => setColor(event.target.value)}
                />
                <button>
                    Add Color
                </button>
            </form>
        </div>
    )
}
