import React from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './components/SayHello'
import SayHowdy from './components/SayHowdy';

function App() {
  return (
    <div>
      <SayHello greeting="Say Hello"></SayHello>
      <SayHowdy my_greeting="Say Howdy"></SayHowdy>    
      </div>
  );
}

export default App;
