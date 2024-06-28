import { PokemonData } from "./dashboard.types";


export interface State{
    pokemon:PokemonData[];
}
export function reducer(state:State,action:{type:"SET_POKEMON",payload:PokemonData[]}){
    switch(action.type){
        case 'SET_POKEMON':{
            return {...state,pokemon:action.payload}
            
        }
    }
}