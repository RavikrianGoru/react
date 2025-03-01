import React from 'react'
import { userData } from '../data'

function ArrayNestedObjs() {
    return (
        <div>
            {userData.map((item) => {
                return (
                    <div style={{ border: "1px solid blue" }}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <div>{item.address.city}</div>
                    </div>
                )
            })};
        </div>
    )
}

export default ArrayNestedObjs
