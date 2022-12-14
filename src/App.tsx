import React, {useEffect, useState} from 'react';
import './App.css';

type Character ={
  id:number
  name: string
}

function App() {
  console.log("App");
  const [characters, setCharacters]= useState<Character[]>([]);

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
        .then(response=>response.json())
        .then(data => setCharacters(data.results))
        .catch(e => console.error(e))
  },[]);

  console.log("Return");
  return (
      <div className="App">
        <ul>
          {characters.map(character => (<li key={character.id}>{character.name}</li>))}
        </ul>
      </div>
  );
}

export default App;
