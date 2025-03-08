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
                <Link to='/p1'><li>Props</li></Link>
                <Link to='/p11'><li>Context</li></Link>
            </ul >

        </div >
    )
}

export default NavCard
