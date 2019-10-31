import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext';
import GameDetails from './GameDetails';

const GamesList = () => {
    const { games } = useContext(GameContext);
    return games.length ? (
        <div className="games-list">
            <ul>
                {games.map(game => {
                    return (<GameDetails key={game.id} game={game} />)
                })}
            </ul>
        </div>
    ) : (<div className="empty">List of games is empty</div>);
}

export default GamesList;