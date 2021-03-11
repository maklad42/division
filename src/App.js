import React, { useState } from 'react';
import './App.scss';
import sets from './assets/gearsets.json';
import { Banner } from './components/Banner';
import { Gearset } from './components/Gearset';

function App() {
  const [gearsets, setGearsets] = useState(sets);

  return (
    <div className="App">
      <Banner />
      <main className="main">
        <Gearset gearsets={gearsets} />
      </main>
    </div>
  );
}

export default App;
