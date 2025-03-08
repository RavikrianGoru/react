import React from 'react'
import C1 from './C1';

const P1 = () => {
    const userName = "Ravi";
    console.log("I am at P1:", userName);
    return (
        <div>
            <p>{userName}  --at --  P1</p>
            <C1 userName={userName} />
        </div>
    )
}

export default P1
