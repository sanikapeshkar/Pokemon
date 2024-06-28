import { useContext, useEffect, useState } from "react";
import PokemonEach from "../PokemonEach/PokemonEach";
import debounce from 'lodash/debounce';
import styles from "./pokemon.module.scss";
import { PokemonProps } from "./pokemon.types";
import { PokemonContext } from "../../context/pokemoncontext";

function PokemonCard(props: PokemonProps) {
  const { pokemon, setAllPokemons }: any = useContext(PokemonContext)!;
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon);

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      const filtered = pokemon.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }, 500);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [search, pokemon]);

  const handleSearch = () => {
    setFilteredPokemon(pokemon.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ));
  };

  return (
    <div className={styles.Pokemon}>
      <form>
        <input
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      <h1>{props.title}</h1>

      {filteredPokemon.map((item: any, i: number) => {
        return (
          <div className={styles.PokemonEach}>
            <PokemonEach
              id={item.id}
              title={item.name}
              caught={item.caught}
              leading={props.leading}
              trailing={props.trailing}
              handleClick={props.handleClick}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PokemonCard;