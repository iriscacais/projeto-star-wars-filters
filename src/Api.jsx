// import { useEffect, useState } from 'react';

// function Api() {
//   const { planets, setPlanets } = useState([]);

//   const url = 'https://swapi.dev/api/planets';
//   const fetchData = async () => {
//     const data = await fetch(url);
//     const json = await data.json();
//     const correctData = json.results.filter((planet) => planet !== 'residents');
//     console.log(correctData);
//     setPlanets(correctData);
//     return correctData;
//   };
// fetchData();
// //   useEffect(() => {
// //     fetchData();
// //   }, []);
//   return { planets };
// }

// export default Api;
