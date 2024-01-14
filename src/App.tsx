import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='name'>Vinoth Madhavan</div>
      </header>
      <Greet name="vinoth"/>
    </div>
  );
}

export default App;
