import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const NavBar = () => {
    const {games} = useContext(GameContext)
    return(
        <div className="navbar">
            <h1>Games to play:</h1>
            <p>{games.length} games left to play</p>
        </div>
    )
}

export default NavBar;