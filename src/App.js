import React from 'react';
import sets from './assets/gearsets.json';
import './App.scss';
import { Banner } from './components/Banner';
import { Gearset } from './components/Gearset';

function App() {
  const gear = sets.gearsets;
  console.log(gear);

  return (
    <div className="App">
      <Banner />
      <main className="main">test</main>
    </div>
  );
}

export default App;
