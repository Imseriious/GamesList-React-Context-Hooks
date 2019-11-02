import React, {createContext, useReducer } from 'react';
import { gameReducer } from '../reducers/gameReducer';

export const GameContext = createContext();

const GameContextProvider = props => {
    const [ games, dispatch ] = useReducer(gameReducer, []);

    return (
        <GameContext.Provider value={{ games, dispatch}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;