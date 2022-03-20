import { StyleSheet, View, Text } from "react-native";

type Types = {
  types: string[];
};

export default function Type({ types }: Types) {
  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    // paddingHorizontal: 20,
    marginTop: 50,
  },
});
