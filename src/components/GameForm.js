import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameContext';

const AddGameForm = () => {
    const { dispatch } = useContext(GameContext);
    const [title, setTitle] = useState('');
    const [developer, setDeveloper] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_GAME', game: {
            title, developer
        }});
        setTitle('');
        setDeveloper('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Game Title" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="text" placeholder="Game Developer" value={developer} onChange={e => setDeveloper(e.target.value)} required />
            <input type="submit" value="Add Game" />
        </form>
    );
}

export default AddGameForm;