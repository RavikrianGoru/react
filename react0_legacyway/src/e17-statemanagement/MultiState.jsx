import React, { useEffect, useReducer, useState } from 'react'


// states
const initState = {
    loading: true,
    data: null,
    error: null
}
//actions
const FETCH_INIT = "FETCHE_INIT";
const FETCH_START = "FETCHE_START";
const FETCH_ERROR = "FETCHE_ERROR";

const dataReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return { ...state };
        case FETCH_START:
            return { ...state, loading: false, data: action.payload };
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload };
    }
};


const MultiState = () => {

    const [state, dispatch] = useReducer(dataReducer, initState);

    const getApiCall = async () => {
        try {
            dispatch({ type: FETCH_INIT });
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            console.log("Response :", response);
            const jsonResponse = await response.json();
            console.log("Json Response :", jsonResponse);
            dispatch({ type: FETCH_START, payload: jsonResponse });
        } catch (error) {
            console.log("Error :", error);
            dispatch({ type: FETCH_ERROR, payload: error });
        }
    };
    useEffect(() => {
        getApiCall();
    }, []);

    return (
        <div>
            {state.loading && <p> Loading.... </p>}
            {state.data && (<div>
                {state.data.map((item) => {
                    return <div>
                        {item.id} {item.title}
                    </div>
                })}
            </div>)}
            {state.error && <div>{alert(state.error)}</div>}
        </div>
    )
}

export default MultiState
