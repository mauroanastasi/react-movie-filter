import { useState } from 'react'


function App() {
  const [show, setShow] = useState(films)

  const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  return (
    <>
      <select name="arrayFilms" id="films">
        <option value="" disabled selected>Seleziona un elemento</option>
        {films.map((film, index) => (
          <option value="Inception" key={index}>
            {film.title}
          </option>
        ))}
      </select>
      <div></div>
    </>
  )
}

export default App
