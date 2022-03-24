import Icon from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type IconFavoriteProps = {
  id: number;
};

export default function IconFavorite({ id }: IconFavoriteProps) {
  const { isAuthenticated } = useContext(AuthContext);

  const addFavorite = () => {
    console.log("Hi" + id);
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
