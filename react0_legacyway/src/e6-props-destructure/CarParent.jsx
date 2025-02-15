import React from 'react'
import CarDetails from './CarDetails'

const carData = {
    model: "Maruti",
    year: 2012,
    dealer: "XYZ Dealer",
    color: "red"
};

const CarParent = () => {
    return (
        <div>
            <h2>Prps destructuring</h2>
            <CarDetails car={carData} />
        </div>
    )
}


export default CarParent
