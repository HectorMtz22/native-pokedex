import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/NavigationStack";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
