import React, { useState } from 'react'


const StateMgmt1 = () => {

    const [city, setCity] = useState("Goa");
    console.log(city);

    //condition
    if (city === "Hyderabad") {
        setCity("Delhi");
    }
    /*
    else {
        setCity("Bandalore");
    }
    */


    return (
        <div>
            StateMgmt1 : we live in {city}
        </div>
    )
}


export default StateMgmt1
