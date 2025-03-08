import React from 'react'
import C2 from './C2'

const C1 = ({ userName }) => {
    console.log("I am at C1:", userName);

    return (
        <div>
            <p>{userName}  --at --  C1</p>
            <C2 userName={userName} />
        </div>
    )
}

export default C1
