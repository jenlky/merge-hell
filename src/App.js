import React from 'react';
import Profile from './components/profile/profile';
import Stars from './Stars';

function App() {
  return (
    <div className="App">
      <Stars />
      <header className="App-header">
        <Profile />
      </header>
    </div>
  );
}

export default App;
