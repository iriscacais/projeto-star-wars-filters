import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Filter() {
  const {
    search,
    setSearch,
    numberFilter,
    setNumberFilter,
    columns,
    setColumns,
    saveFilters,
    setSaveFilters,
    planets,
  } = useContext(myContext);

  const deleteFilters = () => {
    setSaveFilters([]);
    setColumns([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    return planets;
  };
  const salvarFiltros = () => {
    const filterColumns = columns.filter((colum) => colum !== numberFilter.columns);
    setColumns(filterColumns);
    setNumberFilter({
      columns: filterColumns[0],
      operador: 'maior que',
      number: 0,
    });
    setSaveFilters([...saveFilters, numberFilter]);
  };

  return (
    <section>
      <input
        type="text"
        value={ search.value }
        onChange={ (e) => setSearch(e.target.value) }
        data-testid="name-filter"
      />

      <label>
        Columns
        <select
          data-testid="column-filter"
          onChange={ (e) => setNumberFilter(
            { ...numberFilter, columns: e.target.value },
          ) }
          value={ numberFilter.columns }
        >
          {
            columns.map((column) => (
              <option key={ column }>{column}</option>
            ))
          }
        </select>
      </label>

      <label>
        Operador
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setNumberFilter(
            { ...numberFilter, operador: e.target.value },
          ) }
          value={ numberFilter.operador }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

      <input
        type="number"
        value={ numberFilter.number }
        onChange={ (e) => setNumberFilter(
          { ...numberFilter, number: e.target.value },
        ) }
        data-testid="value-filter"
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ salvarFiltros } // aqui os filtros salvos no array e o filtro novo
      >
        Filtrar
      </button>
      <button
        type="button"
        onClick={ deleteFilters }
        data-testid="button-remove-filters"
      >
        Excluir
      </button>
    </section>
  );
}

export default Filter;
// import React, { useContext } from 'react';
// import myContext from '../context/myContext';

// function Filter() {
//   const {
//     search,
//     setSearch,
//     numberFilter,
//     setNumberFilter,
//     columns,
//     setColumns,
//     copyPlanets,
//     setCopyPlanets,
//     saveFilters,
//     setSaveFilters,
//     planets,
//     setBeforeSaveFilters,
//   } = useContext(myContext);

//   const inputSearch = ({ target }) => {
//     setSearch(target.value);
//   };

//   const inputColumns = ({ target }) => {
//     setNumberFilter({ ...numberFilter, columns: target.value });
//   };

//   const inputOperador = ({ target }) => {
//     setNumberFilter({ ...numberFilter, operador: target.value });
//   };

//   const inputNumber = ({ target }) => {
//     setNumberFilter({ ...numberFilter, number: target.value });
//   };

//   const filterButton = () => {
//     let filter = copyPlanets;
//     if (numberFilter.operador === 'maior que') {
//       filter = filter
//         .filter((planet) => (Number(planet[numberFilter.columns])
//         > Number(numberFilter.number)));
//     }

//     if (numberFilter.operador === 'menor que') {
//       filter = filter
//         .filter((planet) => (Number(planet[numberFilter.columns])
//         < Number(numberFilter.number)));
//     }

//     if (numberFilter.operador === 'igual a') {
//       filter = filter
//         .filter((planet) => (Number(planet[numberFilter.columns])
//         === Number(numberFilter.number)));
//     }
//     setCopyPlanets([...filter]);
//     setSaveFilters([...saveFilters, numberFilter]);
//     setBeforeSaveFilters([...saveFilters, numberFilter]);
//     setNumberFilter({
//       columns: 'population',
//       operador: 'maior que',
//       number: 0,

//     });

//     const filterColumns = columns.filter((colum) => colum !== numberFilter.columns);
//     setColumns(filterColumns);
//   };

//   const deleteFilters = () => {
//     setSaveFilters([]);
//     setColumns([
//       'population',
//       'orbital_period',
//       'diameter',
//       'rotation_period',
//       'surface_water',
//     ]);
//     return planets;
//   };

//   return (
//     <section>
//       <input
//         type="text"
//         value={ search.value }
//         onChange={ inputSearch }
//         data-testid="name-filter"
//       />

//       <label>
//         Columns
//         <select data-testid="column-filter" onChange={ inputColumns }>
//           {
//             columns.map((column) => (
//               <option key={ column }>{column}</option>
//             ))
//           }
//         </select>
//       </label>

//       <label>
//         Operador
//         <select data-testid="comparison-filter" onChange={ inputOperador }>
//           <option>maior que</option>
//           <option>menor que</option>
//           <option>igual a</option>
//         </select>
//       </label>

//       <input
//         type="number"
//         value={ numberFilter.number }
//         onChange={ inputNumber }
//         data-testid="value-filter"
//       />

//       <button data-testid="button-filter" type="button" onClick={ filterButton }>
//         Filtrar
//       </button>
//       <button
//         type="button"
//         onClick={ deleteFilters }
//         data-testid="button-remove-filters"
//       >
//         Excluir
//       </button>
//     </section>
//   );
// }

// export default Filter;
