import React, { useState } from 'react'
import F1 from './F1';
import F2 from './F2';

const P1 = () => {
    const [someCondition, SetSomeCondition] = useState(true);

    return (
        <div>
            <h2>Welcome</h2>
            {someCondition ? <F1 /> : <F2 />}
        </div>
    )
}

export default P1
