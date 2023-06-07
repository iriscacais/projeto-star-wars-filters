import { useContext } from 'react';
import myContext from '../context/myContext';
import './table.css';

function Table() {
  const {
    planets,
    saveFilters,
    setSaveFilters,
    search,

  } = useContext(myContext);

  const tratarDados = () => {
    const filterdByName = planets.filter((planet) => planet.name.includes(search)); // filtro pelo nome
    const filterByNameAndNumber = filterdByName.filter((planet) => {
      const filterPlanet = saveFilters.map(({ columns, operador, number }) => {
        switch (operador) {
        case 'maior que':
          return Number(planet[columns]) > Number(number);
        case 'menor que':
          return Number(planet[columns]) < Number(number);
        case 'igual a':
          return Number(planet[columns]) === Number(number);
        default:
          return true;
        }
      });
      return filterPlanet.every((element) => element);
    });
    return filterByNameAndNumber;
  };
  // const divStyle = {
  //   overflowY: 'scroll',
  //   border: '1px solid red',
  //   width: '500px',
  //   float: 'left',
  //   height: '500px',
  //   position: 'relative',
  // };
  return (
    <section>

      {
        saveFilters.map((filtro, index) => (
          <div key={ index } data-testid="filter" className="aplyFilters">
            <p className="paragraph">
              {filtro.columns}
              {' '}
              {filtro.operador}
              {' '}
              {filtro.number}
            </p>

            <button
              type="button"
              data-testid="delete-one-filter"
              onClick={ () => setSaveFilters(saveFilters
                .filter((filter) => filter !== filtro)) }
              // onClick={ deleteOneFilter }
              className="button"
            >

              Excluir filtro

            </button>

          </div>

        ))

      }
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {tratarDados().map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planets">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;

// import { useContext } from 'react';
// import myContext from '../context/myContext';

// function Table() {
//   const {
//     planets,
//     search,
//     copyPlanets,
//     saveFilters,
//     setSaveFilters,

//   } = useContext(myContext);

//   return (
//     <section>

//       {
//         saveFilters.map((filtro, index) => (
//           <div key={ index } data-testid="filter">
//             <p>
//               {filtro.columns}
//               {' '}
//               {filtro.operador}
//               {' '}
//               {filtro.number}
//             </p>

//             <button
//               type="button"
//               data-testid="delete-one-filter"
//               onClick={ () => setSaveFilters(saveFilters
//                 .filter((filter) => filter !== filtro)) }
//               // onClick={ deleteOneFilter }
//             >

//               Excluir filtro

//             </button>

//           </div>

//         ))

//       }

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Rotation Period</th>
//             <th>Orbital Period</th>
//             <th>Diameter</th>
//             <th>Climate</th>
//             <th>Gravity</th>
//             <th>Terrain</th>
//             <th>Surface Water</th>
//             <th>Population</th>
//             <th>Films</th>
//             <th>Created</th>
//             <th>Edited</th>
//             <th>URL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {(saveFilters.length !== 0) ? copyPlanets
//             .filter((planet) => planet.name.includes(search)).map((planet) => (
//               <tr key={ planet.name }>
//                 <td>{planet.name}</td>
//                 <td>{planet.rotation_period}</td>
//                 <td>{planet.orbital_period}</td>
//                 <td>{planet.diameter}</td>
//                 <td>{planet.climate}</td>
//                 <td>{planet.gravity}</td>
//                 <td>{planet.terrain}</td>
//                 <td>{planet.surface_water}</td>
//                 <td>{planet.population}</td>
//                 <td>{planet.films}</td>
//                 <td>{planet.created}</td>
//                 <td>{planet.edited}</td>
//                 <td>{planet.url}</td>
//               </tr>
//             )) : planets
//             .filter((planet) => planet.name.includes(search)).map((planet) => (
//               <tr key={ planet.name }>
//                 <td>{planet.name}</td>
//                 <td>{planet.rotation_period}</td>
//                 <td>{planet.orbital_period}</td>
//                 <td>{planet.diameter}</td>
//                 <td>{planet.climate}</td>
//                 <td>{planet.gravity}</td>
//                 <td>{planet.terrain}</td>
//                 <td>{planet.surface_water}</td>
//                 <td>{planet.population}</td>
//                 <td>{planet.films}</td>
//                 <td>{planet.created}</td>
//                 <td>{planet.edited}</td>
//                 <td>{planet.url}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }

// export default Table;
