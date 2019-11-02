import uuid from 'uuid';

export const gameReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_GAME' : 
            return [...state, {
                title: action.game.title,
                developer: action.game.developer,
                id: uuid()
            }]
        case 'REMOVE_GAME' :
            return state.filter(game => game.id !== action.id)
        default: 
            return state
    }
}