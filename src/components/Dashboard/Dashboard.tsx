import { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import styles from "./dashboard.module.scss";
import PokemonCard from "../PokemonCard/pokemoncard";
import { DashboardProps, PokemonData } from "./dashboard.types";
import { State, reducer } from "./dashboard.state";
import { PokemonContext } from "../../context/pokemoncontext";

function Dashboard({}: DashboardProps): JSX.Element {
  // const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);

  const pokcontext = useContext(PokemonContext);
  const initialstate: State = {
    pokemon: [],
  };
  
  const getData = async (): Promise<void> => {
    try {
      const { data } = await axios.get<PokemonData[]>("url", {
        headers: {
          "ngrok-skip-browser-warning": "skip-browser-warning",
        },
      });

      pokcontext.setallPokemons()
  
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleClick(id: number) {
    const handlepokemon = pokcontext.pokemon.filter((pokemon) =>
      pokemon.id === id ? { ...pokemon, caught: !pokemon.caught } : pokemon
    );
    console.log('handlepokemon from handleclik'+handlepokemon)
    pokcontext?.handleClick(handlepokemon);
  }

  const allPokemon = pokcontext.pokemon.filter((pokemon) => !pokemon.caught);
  console.log('allpokemon'+allPokemon);
  const caughtPokemon = pokcontext.pokemon.filter((pokemon) => pokemon.caught);

  return (
    <>
      <h1>Pokemon List</h1>
      <div className={styles.Main}>
        <PokemonCard
          title="All"
          data={allPokemon}
          handleClick={handleClick}
          trailing={true}
        />
        <PokemonCard
          title="Caught"
          data={caughtPokemon}
          handleClick={handleClick}
          leading={true}
        />
      </div>
    </>
  );
}

export default Dashboard;
