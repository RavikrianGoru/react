import React from 'react'

let numbs = [1, 3, 5, 8, 9, 2];
let sampleArry = [1, 'ravi', 35.6, { name: "Raj" }];
let players = [
    {
        name: "ravi",
        age: 35
    },
    {
        name: "Raj",
        age: 32
    }
];

const ArraysDemo = () => {
    return (
        <div>
            Data: {numbs}
            <br />
            index 0: {numbs[0]}
            index 3 as object: {sampleArry[3].name}

            {
                players.map((item) => {
                    return (
                        <div>
                            Players name: {item.name} <br />
                            Players age: {item.age}
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ArraysDemo
