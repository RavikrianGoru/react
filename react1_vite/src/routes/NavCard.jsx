import React from 'react'
import { Link } from 'react-router-dom'

const NavCard = () => {
    return (
        <div class='navSection'>
            <ul>
                <Link to='/leftcard'><li>Left</li></Link>
                <Link to='/rightcard'><li>Right</li></Link>
                <Link to='/middlecard'><li>Middle</li></Link>
                <Link to='/bottomcard'><li>Bottom</li></Link>
            </ul >

        </div >
    )
}

export default NavCard
