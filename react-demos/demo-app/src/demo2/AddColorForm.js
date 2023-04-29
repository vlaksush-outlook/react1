// //controlled elements
// import React, { useState } from 'react'

// export default function AddColorForm({onNewColor}) {
//     const [title, setTitle] = useState("");
//     const [color, setColor] = useState("#000000")


//     const submit = (e) => {
//         e.preventDefault();
//         onNewColor(title,color)
//         setTitle("")
//         setColor("#000000")
//     }

//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <input
//                     value={title}
//                     type="text"
//                     placeholder='enter title'
//                     required
//                     onChange={(event) => setTitle(event.target.value)}
//                 />

//                 <input
//                     value={color}
//                     type="color"
//                     placeholder='enter color'
//                     required
//                     onChange={(event) => setColor(event.target.value)}
//                 />
//                 <button>
//                     Add Color
//                 </button>
//             </form>
//         </div>
//     )
// }




// //uncontrolled elements
// import React, { useRef } from 'react'

// export default function AddColorForm({onNewColor}) {
//     const txtTitle = useRef();
//     const hexColor = useRef();


//     const submit = (e) => {
//         e.preventDefault();
//         const title =txtTitle.current.value
//         const color = hexColor.current.value
//         onNewColor(title,color)
//         txtTitle.current.value = ""
//         hexColor.current.value = ""
//     }

//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <input
//                     ref={txtTitle}
//                     type="text"
//                     placeholder='enter title'
//                     required
//                 />

//                 <input
//                     ref={hexColor}
//                     type="color"
//                     placeholder='enter color'
//                     required
//                 />
//                 <button>
//                     Add Color
//                 </button>
//             </form>
//         </div>
//     )
// }


//controlled elements with custom hook
import React, { useState } from 'react'
import { useInput } from './hooks';

export default function AddColorForm({ onNewColor }) {
    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput("#000000")


    const submit = (e) => {
        e.preventDefault();
        const title = titleProps.value;
        const color = colorProps.value;
        onNewColor(title, color)
        resetTitle();
        resetColor();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    {...titleProps}
                    type="text"
                    placeholder='enter title'
                    required
                />

                <input
                    {...colorProps}
                    type="color"
                    placeholder='enter color'
                    required
                />
                <button>
                    Add Color
                </button>
            </form>
        </div>
    )
}


