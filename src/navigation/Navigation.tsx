import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Favorite from "../screens/Favorite";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Navigator>
      <Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: (props) => <Icon name="heart" {...props} />,
        }}
      />
      <Screen
        name="Pokedex"
        component={Pokedex}
        options={{ tabBarLabel: "", tabBarIcon: () => renderPokeball() }}
      />
      <Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: (props) => <Icon name="user" {...props} />,
        }}
      />
    </Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
