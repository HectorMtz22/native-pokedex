import Icon from "react-native-vector-icons/FontAwesome5";
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
  const {
    isAuthenticated,
    auth: { email },
  } = useContext(AuthContext);

  useEffect(
    // @ts-expect-error
    () => isPokemonFavoriteApi(id).then((res) => setIsFav(res)),
    [id]
  );

  const toggleFavorite = async () => {
    if (isFav) {
      await deletePokemonFavoriteApi(id, email);
      setIsFav(false);
    } else {
      await addPokemonFavoriteApi(id, email);
      setIsFav(true);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <View>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={toggleFavorite}
        solid={isFav}
        style={{ marginRight: 10 }}
      />
    </View>
  );
}
