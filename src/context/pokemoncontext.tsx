import React, { createContext, useReducer } from "react";
import { PokemonData } from "../components/Dashboard/dashboard.types";
import { reducer } from "../components/Dashboard/dashboard.state";

interface PokemonContextType {
  pokemon: PokemonData[];
  handleClick: (handlepokemon: any) => void;
  setallPokemons: () => void;
}

export const PokemonContext = createContext<PokemonContextType>({
  pokemon: [],
  handleClick: () => {},
  setallPokemons: () => {},
});

interface PokemonProviderProps {
  children: React.ReactNode;
}

function PokemonProvider({ children }: PokemonProviderProps) {
  const [state, dispatch] = useReducer(reducer, { pokemon: [] });

  function setallPokemons() {
    dispatch({
      type: "SET_POKEMON",
      payload: [
        {
          id: 1,
          name: "sanika",
          caught: false,
        },
        {
          id: 2,
          name: "kwhekwh",
          caught: false,
        },
        {
          id: 3,
          name: "qwjhqkhe",
          caught: false,
        },
        {
          id: 4,
          name: "kdw",
          caught: false,
        },
      ],
    });
  }
  const handleClick = (handlepokemon: any) => {
    dispatch({ type: "SET_POKEMON", payload: handlepokemon });
  };
  return (
    <PokemonContext.Provider
      value={{ pokemon: state.pokemon, handleClick, setallPokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
