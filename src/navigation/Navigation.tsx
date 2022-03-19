import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Favorite from "../screens/Favorite";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Navigator>
      <Screen name="Account" component={Account} />
      <Screen name="Pokedex" component={Pokedex} />
      <Screen name="Favorite" component={Favorite} />
    </Navigator>
  );
}
