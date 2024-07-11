import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

function App() {
  return (
    <>
      <Header />
      <SolarSystem />
      <Title headline="text" />
    </>
  );
}

export default App;
