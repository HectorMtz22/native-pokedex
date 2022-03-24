import FA5 from "react-native-vector-icons/FontAwesome5";
import FA from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  addPokemonFavoriteApi,
  deletePokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/favorite";

type IconFavoriteProps = {
  id: number;
};

export default function IconFavorite({ id }: IconFavoriteProps) {
  const [isFav, setIsFav] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(
    // @ts-expect-error
    () => isPokemonFavoriteApi(id).then((res) => setIsFav(res)),
    [id]
  );

  const toggleFavorite = async () => {
    if (isFav) {
      await deletePokemonFavoriteApi(id);
      setIsFav(false);
    } else {
      await addPokemonFavoriteApi(id);
      setIsFav(true);
    }
  };

  if (!isAuthenticated) return null;

  const Icon = isFav ? FA : FA5;

  return (
    <View>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={toggleFavorite}
        style={{ marginRight: 10 }}
      />
    </View>
  );
}
