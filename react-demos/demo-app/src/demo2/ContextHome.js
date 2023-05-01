import React, { useState } from 'react'
import NameContext from '../context/mycontext';
import A from '../context/A';

export default function ContextHome() {
    const [orgName, setOrgName] = useState("ABC Technologies");

    return (
        <div>
            <NameContext.Provider value={orgName}>
                <A />
            </NameContext.Provider>
        </div>
    )
}
