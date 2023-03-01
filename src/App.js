import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import myContext from './context/myContext';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((result) => result.json())
      .then((data) => {
        const dataPlanets = data.results.map((planet) => {
          delete planet.residents;
          return planet;
        });

        setPlanets(dataPlanets);
      });
  }, []);

  const context = {
    planets,
  };
  console.log(context);
  return (
    <myContext.Provider value={ context }>
      <section>
        <span>Star Wars</span>
        <Table />
      </section>
    </myContext.Provider>
  );
}

export default App;
