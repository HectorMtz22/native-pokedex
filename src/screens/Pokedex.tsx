import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/PokemonList";
import { usePokemons } from "../hooks/usePokemons";

export default function Pokedex() {
  const props = usePokemons();
  return (
    <SafeAreaView>
      <PokemonList {...props} />
    </SafeAreaView>
  );
}
