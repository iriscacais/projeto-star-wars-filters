import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Filter() {
  const {
    planets,
    search,
    setSearch,
    setPlanets,
    numberFilter,
    setNumberFilter,
  } = useContext(myContext);

  const inputSearch = ({ target }) => {
    setSearch(target.value);
  };

  const inputColumns = ({ target }) => {
    setNumberFilter({ ...numberFilter, columns: target.value });
  };

  const inputOperador = ({ target }) => {
    setNumberFilter({ ...numberFilter, operador: target.value });
  };

  const inputNumber = ({ target }) => {
    setNumberFilter({ ...numberFilter, number: target.value });
  };

  const filterButton = () => {
    let filter = planets;
    if (numberFilter.operador === 'maior que') {
      filter = filter
        .filter((planet) => (Number(planet[numberFilter.columns])
        > Number(numberFilter.number)));
    }

    if (numberFilter.operador === 'menor que') {
      filter = filter
        .filter((planet) => (Number(planet[numberFilter.columns])
        < Number(numberFilter.number)));
    }

    if (numberFilter.operador === 'igual a') {
      filter = filter
        .filter((planet) => (Number(planet[numberFilter.columns])
        === Number(numberFilter.number)));
    }
    setPlanets(filter);
  };

  return (
    <section>
      <input
        type="text"
        value={ search.value }
        onChange={ inputSearch }
        data-testid="name-filter"
      />

      <label>
        Columns
        <select data-testid="column-filter" onChange={ inputColumns }>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>

      <label>
        Operador
        <select data-testid="comparison-filter" onChange={ inputOperador }>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

      <input
        type="number"
        value={ numberFilter.number }
        onChange={ inputNumber }
        data-testid="value-filter"
      />

      <button data-testid="button-filter" type="button" onClick={ filterButton }>
        Filtrar
      </button>
    </section>
  );
}

export default Filter;
