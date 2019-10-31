import React from 'react';
import GameContextProvider from './contexts/GameContext';
import NavBar from './components/NavBar';
import GamesList from './components/GamesList';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
          <NavBar />
          <GamesList />
      </GameContextProvider>
    </div>
  );
}

export default App;
