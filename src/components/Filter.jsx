import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Filter() {
  const { search, setSearch } = useContext(myContext);

  const inputSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <input
      type="text"
      value={ search.value }
      onChange={ inputSearch }
      data-testid="name-filter"
    />
  );
}

export default Filter;
