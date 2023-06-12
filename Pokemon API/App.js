
import './App.css';
import React,{useState} from "react"

function App() {
  const [pokemons,setPokemons]=useState([]);
  const fun1=()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
          .then(response =>{
            return response.json();})
          .then(response =>{
            setPokemons(response.results);
          }
            )
          .catch(err=>{
            console.log(err);
          })
        }
  return (
    <>
    <button onClick={fun1}>Fetch pokemon!</button>
    <ul>
      {pokemons.map((pok,idx)=><li key={idx}>{pok.name}</li>)}
    </ul>
    </>
  );
}



export default App;
