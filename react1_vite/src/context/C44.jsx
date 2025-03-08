import React from 'react'
import { useTransDetailsContextData } from './ExampleContext';
const C44 = () => {
    const { transData } = useTransDetailsContextData();
    console.log("transData:", transData);
    return (

        <div>
            <h2> Got transData through Conext in  C44: {transData.transDetails.name}, {transData.transDetails.author}, {transData.transDetails.price}</h2>
        </div>
    )
}

export default C44
