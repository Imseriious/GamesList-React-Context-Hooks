import React from 'react';
import GameContextProvider from './contexts/GameContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
          <NavBar />
      </GameContextProvider>
    </div>
  );
}

export default App;
