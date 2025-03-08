import React from 'react'
import C3 from './C3'

const C2 = ({ userName }) => {
    console.log("I am at C2:", userName);
    return (
        <div>
            <p>{userName}  --at --  C2</p>
            <C3 userName={userName} />
        </div>
    )
}

export default C2
