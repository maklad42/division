import React from 'react';
import './App.scss';
import { Banner } from './components/Banner';
import { Gearset } from './components/Gearset';

function App() {
  return (
    <div className="App">
      <Banner />
      <main className="main">
        <Gearset />
      </main>
    </div>
  );
}

export default App;
