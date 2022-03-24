import { View, Text, Button } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import PokemonList from "../components/PokemonList";
import useFavorite from "../hooks/useFavorite";

export default function Favorite() {
  const { isAuthenticated, pokemons } = useFavorite();

  if (!isAuthenticated) return <LoginForm />;

  return (
    <View>
      <PokemonList pokemons={pokemons} isNext={null} loadMore={() => null} />
    </View>
  );
}
