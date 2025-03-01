import React, { useState } from 'react'


function FetchDemoPost() {

    const empPostApi = "http://localhost:8080/emp";

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [dep, setDep] = useState("");

    //fetch response, error
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    //console.log(name, role, email, dep);

    const empObj = { name, role, email, dep };


    const postEmpDetails = async (e) => {
        e.preventDefault();
        console.log("Employee details:", empObj);

        try {
            //Calling post API
            const response = await fetch(
                empPostApi,
                {
                    method: "POST",
                    headers: { "Content-Type": "Application/json" },
                    body: JSON.stringify(empObj)
                }
            );
            // Check if the response is not OK (status code 4xx/5xx)
            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error('Bad Request: The request was invalid or cannot be served.');
                } else if (response.status === 404) {
                    throw new Error('Not Found: The requested resource could not be found.');
                } else if (response.status === 500) {
                    throw new Error('Internal Server Error: Something went wrong on the server.');
                }
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const result = await response.json();
            setData(result); // Handle the response data
            console.log("result:", result);
        } catch (error) {
            // Catch and handle network errors or any other exceptions
            setError(error.message);
            console.error('Error during fetch request:', error);
        }


    }

    return (
        <div className="empForm">
            <div className="section">
                <form onSubmit={postEmpDetails}>
                    <label htmlFor="empName">Employee Name</label><br />
                    <input type="text" name='name' onChange={(e) => { setName(e.target.value); }} /><br />

                    <label htmlFor="empRole"><br />Employee Role</label><br />
                    <input type="text" name='role' onChange={(e) => { setRole(e.target.value); }} /><br />

                    <label htmlFor="empEmail">Employee Email</label><br />
                    <input type="email" name='email' onChange={(e) => { setEmail(e.target.value); }} /><br />

                    <label htmlFor="empDep">Employee Department</label><br />
                    <input type="text" name='dep' onChange={(e) => { setDep(e.target.value); }} /><br />

                    <button type="submit">Submit</button>

                    {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                    {data && <p>Data: {JSON.stringify(data)}</p>}
                </form>
            </div>

        </div>
    )
}

export default FetchDemoPost
