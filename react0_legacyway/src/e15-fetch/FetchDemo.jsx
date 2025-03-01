import React, { useEffect, useState } from 'react'

const userGetApi = "https://jsonplaceholder.typicode.com/posts";



function FetchDemo() {

    const [userData, setUserData] = useState([]);

    const getApiCall = async (getAPI) => {
        console.log("API :", getAPI);
        const response = await fetch(getAPI);
        const jsonData = await response.json();
        setUserData(jsonData);
        //return jsonData;
    }


    useEffect(() => {
        console.log(getApiCall(userGetApi));
    }, []);


    return (
        <div>
            {userData.map((item) => {
                return (
                    <div>
                        {item.id}
                    </div>
                )
            })}
        </div>
    )
}

export default FetchDemo
