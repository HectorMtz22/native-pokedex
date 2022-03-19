import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  return (
    <SafeAreaView>
      <PokemonList />
    </SafeAreaView>
  );
}
