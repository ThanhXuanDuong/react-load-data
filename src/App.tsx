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
    (async () =>{
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(response.data.results);
    })()
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
