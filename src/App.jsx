import { useState } from 'react'


function App() {
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
        <option value="Inception"></option>
        <option value="Il Padrino"></option>
        <option value="Titanic"></option>
        <option value="Batman"></option>
        <option value="Interstellar"></option>
        <option value="Pulp Fiction"></option>
      </select>
    </>
  )
}

export default App
