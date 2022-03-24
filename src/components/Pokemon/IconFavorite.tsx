import Icon from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { addPokemonFavoriteApi } from "../../api/favorite";

type IconFavoriteProps = {
  id: number;
};

export default function IconFavorite({ id }: IconFavoriteProps) {
  const { isAuthenticated } = useContext(AuthContext);

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  if (!isAuthenticated) return null;

  return (
    <View>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={addFavorite}
        style={{ marginRight: 10 }}
      />
    </View>
  );
}
