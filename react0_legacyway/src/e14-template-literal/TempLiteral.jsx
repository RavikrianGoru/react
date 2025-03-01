import React from 'react'

const sampleTemp = "Hello!, Goodmorning ";

function TempLiteral() {
    return (
        <div style={{ border: "2px solid green" }}>
            <div>
                {sampleTemp}{"Ravi"}
            </div>
            <div>
                {`${sampleTemp} Ravi`}
            </div>

        </div>
    )
}



export default TempLiteral
