import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import myContext from './context/myContext';

function App() {
  const [planets, setPlanets] = useState([]); // armazena meus dados vindos da api
  // const [copyPlanets, setCopyPlanets] = useState([]);
  const [saveFilters, setSaveFilters] = useState([]); // filtros add ao clicar no botao
  const [search, setSearch] = useState(''); // armazena o input de name
  const [numberFilter, setNumberFilter] = useState({
    columns: 'population',
    operador: 'maior que',
    number: 0,
  }); // estado que controla os formulários
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
    search,
    setSearch,
    setPlanets,
    numberFilter,
    setNumberFilter,
    columns,
    setColumns,
    saveFilters,
    setSaveFilters,
  };

  return (
    <myContext.Provider value={ context }>
      <section>
        <span className="title">Star Wars Filter</span>
        <Filter />
        <Table />
      </section>
    </myContext.Provider>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Filter from './components/Filter';
// import Table from './components/Table';
// import myContext from './context/myContext';

// function App() {
//   const [planets, setPlanets] = useState([]);
//   const [copyPlanets, setCopyPlanets] = useState([]);
//   const [saveFilters, setSaveFilters] = useState([]);
//   const [search, setSearch] = useState('');
//   const [numberFilter, setNumberFilter] = useState({
//     columns: 'population',
//     operador: 'maior que',
//     number: 0,
//   });
//   const [beforeSaveFilters, setBeforeSaveFilters] = useState([]);
//   const [columns, setColumns] = useState([
//     'population',
//     'orbital_period',
//     'diameter',
//     'rotation_period',
//     'surface_water',
//   ]);

//   useEffect(() => {
//     fetch('https://swapi.dev/api/planets')
//       .then((result) => result.json())
//       .then((data) => {
//         const dataPlanets = data.results.map((planet) => {
//           delete planet.residents;
//           return planet;
//         });

//         setPlanets(dataPlanets);
//         setCopyPlanets(dataPlanets);
//       });
//   }, []);

//   const context = {
//     planets,
//     search,
//     setSearch,
//     setPlanets,
//     numberFilter,
//     setNumberFilter,
//     columns,
//     setColumns,
//     copyPlanets,
//     setCopyPlanets,
//     saveFilters,
//     setSaveFilters,
//     beforeSaveFilters,
//     setBeforeSaveFilters,
//   };

//   return (
//     <myContext.Provider value={ context }>
//       <section>
//         <span>Star Wars</span>
//         <Filter />
//         <Table />
//       </section>
//     </myContext.Provider>
//   );
// }

// export default App;
