import React from 'react'

const FirstComp = (props) => {
    console.log(props);
    return (
        <div>
            Data from FirstComp {props.name} {props.city}
        </div>
    )
}

export default FirstComp
