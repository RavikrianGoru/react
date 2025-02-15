import React, { useState } from 'react'


const StateMgmt = () => {

    const [city, setCity] = useState("Hyderabad");
    console.log(city);
    setCity("Hyd");

    return (
        <div>
            StateMgmt : we live in {city}
        </div>
    )
}


export default StateMgmt
