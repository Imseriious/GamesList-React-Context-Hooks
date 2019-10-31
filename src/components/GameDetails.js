import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const GameDetails = ({ game }) => {
    const { removeGame } = useContext(GameContext);
    return (
        <li onClick={() => removeGame(game.id)}>
            <p className="title">{game.title}</p>
            <p className="developer">{game.developer}</p>
        </li>
    )
}

export default GameDetails;