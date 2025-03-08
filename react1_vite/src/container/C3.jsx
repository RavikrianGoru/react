import React from 'react'
import C4 from './C4'

const C3 = ({ userName }) => {
    console.log("I am at C3:", userName);
    return (
        <div>
            <p>{userName}  --at --  C3</p>
            <C4 userName={userName} />
        </div>
    )
}

export default C3
