import React, { useState, createContext } from 'react';
import uuid from 'uuid/v1';

export const GameContext = createContext();

const BookContextProvider = props => {
    const { games, setGames } = useState([
        { title: "Call Of Duty", developer: "Infinity Ward", id: 1 },
        { title: "Grand Theft Auto", developer: "Rockstar Games", id: 2 }
    ]);

    const addGame = (title, developer) => {
        setGames([...games, { title, developer, id: uuid() }]);
    }
    const removeGame = id => {
        setGames(games.filter(game => { game.id !== id }));
    }
    return (
        <GameContext.Provider value={{ games, addGame, removeGame }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default BookContextProvider;