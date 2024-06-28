export interface PokemonEachProps{
    id:number;
    title:string;
    caught:boolean
    handleClick:(id:number)=>void;
    leading?:boolean;
    trailing?:boolean;
}