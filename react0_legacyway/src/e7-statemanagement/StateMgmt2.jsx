import React, { useEffect, useState } from 'react'


const StateMgmt2 = () => {

    const [city, setCity] = useState("Hyd");

    useEffect(
        () => {
            if (city === "Delhi") {
                setCity("Goa");
                console.log("Delhi");
            }
            else {
                setCity("Vizag");
                console.log("not is Delhi");
            }
        },
        [city]
    );

    return (
        <div>
            StateMgmt2 We left {city}
        </div>
    )
}

export default StateMgmt2
