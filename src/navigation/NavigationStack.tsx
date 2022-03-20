import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemon from "../screens/Pokemon";
import Navigation from "./Navigation";

export default function NavigationStack() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Navigation}
        options={{ headerShown: false }}
      />
      <Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Navigator>
  );
}
