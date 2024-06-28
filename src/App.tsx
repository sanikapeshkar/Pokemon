import Dashboard from "./components/Dashboard/Dashboard";
import PokemonProvider from "./context/pokemoncontext";

function App() {
  return (
    <PokemonProvider>
      <Dashboard />
    </PokemonProvider>
  );
}

export default App;
