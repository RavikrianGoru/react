import React from 'react'

const Mango = () => {

    return (
        <h2>Mangos are sweet</h2>
    )
}

const Grape = () => {
    return (
        <h2>Grapes are small</h2>
    )
}


function Sample() {
    return (
        <div>
            Sample
            <Mango />
            <Grape />
        </div>
    )
}

export default Sample
