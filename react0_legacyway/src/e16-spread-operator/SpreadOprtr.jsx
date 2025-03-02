import React from 'react'

function SpreadOprtr() {

    const nbr1 = [1, 2, 3];
    const nbr2 = [11, 22, 33];
    const nbr = [...nbr1, ...nbr2];
    console.log(nbr);

    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const objs = { ...obj1, ...obj2 };
    console.log(objs);
    return (
        <div>
            {nbr.join(",")} <br />
        </div>
    )
}

export default SpreadOprtr
