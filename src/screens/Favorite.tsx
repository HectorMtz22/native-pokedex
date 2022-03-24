import { View, Text, Button } from "react-native";
import NotLogged from "../components/Auth/NotLogged";
import PokemonList from "../components/PokemonList";
import useFavorite from "../hooks/useFavorite";

export default function Favorite() {
  const { isAuthenticated, pokemons } = useFavorite();

  if (!isAuthenticated) return <NotLogged />;

  return (
    <View>
      <PokemonList pokemons={pokemons} isNext={null} loadMore={() => null} />
    </View>
  );
}
