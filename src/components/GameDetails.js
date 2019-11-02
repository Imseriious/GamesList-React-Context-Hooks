import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const GameDetails = ({ game }) => {
    const { dispatch } = useContext(GameContext);
    return (
        <li onClick={() => dispatch({type: 'REMOVE_GAME', id: game.id})}>
            <p className="title">{game.title}</p>
            <p className="developer">{game.developer}</p>
        </li>
    )
}

export default GameDetails;