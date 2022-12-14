import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

type Character ={
  id:number
  name: string
}

function App() {
  console.log("App");
  const [characters, setCharacters]= useState<Character[]>([]);

  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character")
        .then(response=> setCharacters(response.data.results))
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
