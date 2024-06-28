import { PokemonData } from "../Dashboard/dashboard.types";


export interface PokemonProps {
 
    title: string;
    data: PokemonData[];
    handleClick:(id:number)=>void;
    leading?:boolean;
    trailing?:boolean;
  
  }