import React from 'react'

const Potato = () => {
    return (
        <div>
            <h3>Potato</h3>
        </div>
    )
}
const Tomato = () => {
    return (
        <div>
            <h3>Tomato</h3>
        </div>
    )
}
const Broccoli = () => {
    return (
        <div>
            <h3>Broccoli</h3>
        </div>
    )
}

function Vegtables() {
    return (
        <div className='veg'>
            <h2>CSS styling</h2>
            <Potato />
            <Tomato />
            <Broccoli />
        </div>
    )
}

export default Vegtables
