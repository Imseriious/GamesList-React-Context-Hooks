import React, {createContext, useReducer, useEffect } from 'react';
import { gameReducer } from '../reducers/gameReducer';

export const GameContext = createContext();

const GameContextProvider = props => {
    const [ games, dispatch ] = useReducer(gameReducer, [], () => {
        const localData = localStorage.getItem('games')
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games))
    }, [games]);
    return (
        <GameContext.Provider value={{ games, dispatch}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;