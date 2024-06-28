import { useContext } from "react";
import { PokemonEachProps } from "./PokemonEach.types";
import styles from "./pokemonEach.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import  { PokemonContext } from "../../context/pokemoncontext";


function PokemonEach(props: PokemonEachProps) {
 

  return (
    <div className={styles.PokemonEach} onClick={() => props.handleClick(props.id)}>
   
      {props.leading && <FaArrowRight />}
      <span>{props.title}</span> {props.trailing && <FaArrowLeft />}
    </div>
  );
}

export default PokemonEach;
