import React from 'react'
import { useTransDetailsContextData } from './ExampleContext'

const C22 = () => {
    const { transData } = useTransDetailsContextData();
    console.log("transData:", transData);
    return (
        <div>
            <h2> Got transData through Conext in  C22: {transData.transDetails.name}, {transData.transDetails.author}, {transData.transDetails.price}</h2>
        </div>
    )
}

export default C22
