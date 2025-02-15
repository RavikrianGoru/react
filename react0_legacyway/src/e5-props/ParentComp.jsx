import React from 'react'
import FirstComp from './FirstComp'
import SecondComp from './SecondComp'
import ThirdComp from './ThirdComp'
import FourthComp from './FourthComp'

const address = {
    city: "hyd",
    area: "ameerpet"
}

const ParentComp = (props) => {
    return (
        <div>
            <h2>Props:Properties and inter-component communications</h2>
            <FirstComp name="Ravi" city={address.city} />
            <SecondComp name="Kiran" city={address.city} />
            <ThirdComp name="Goru" city={address.area} />
            <FourthComp name="React" city={address.city} />
        </div>
    )
}

export default ParentComp
