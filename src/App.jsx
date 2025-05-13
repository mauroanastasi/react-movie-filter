import { useState, useEffect } from 'react'


function App() {
  const [shows, setShows] = useState(films);
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState(shows);

  const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  useEffect(() => {
    const filteredArray = shows.filter((show) => {
      return show.includes(search);
    })
    setFilteredSearch(filteredArray)
  }, [search])

  return (
    <>
      <select name="arrayFilms" id="films">
        <option value="" disabled selected>Seleziona un elemento</option>
        {filteredSearch.map((film, index) => (
          <option value="Inception" key={index}>
            {film.title}
          </option>
        ))}
      </select>
      <div value={search} onChange={(e) => {
        {
          setSearch(e.target.value);
        }
      }
      }></div>
    </>
  )
}

export default App
