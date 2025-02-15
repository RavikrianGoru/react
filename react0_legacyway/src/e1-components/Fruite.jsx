import React from 'react'

const Mango = () => {
    return (
        <div>
            <h3> Mango</h3>
        </div>
    )
}
const Grape = () => {
    return (
        <div>
            <h3> Grape</h3>
        </div>
    )
}

function Fruite() {
    return (
        <div>
            <h2>Components and nested components</h2>
            <Mango />
            <Grape />
        </div>
    )
}

export default Fruite
