import React from 'react';
import GameContextProvider from './contexts/GameContext';
import NavBar from './components/NavBar';
import GamesList from './components/GamesList';
import AddGameForm from './components/GameForm';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
          <NavBar />
          <GamesList />
          <AddGameForm />
      </GameContextProvider>
    </div>
  );
}

export default App;
