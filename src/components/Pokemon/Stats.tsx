import { View, Text, StyleSheet } from "react-native";

export default function Stats({ stats }: any) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item: any, index: number) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={bar(item.base_stat).bar} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const bar = (width: number) => {
  const color = width < 50 ? "#ff3e3e" : "#00ac27";
  const widthPercentage = `${width}%`;

  return StyleSheet.create({
    bar: {
      backgroundColor: color,
      width: widthPercentage,
      height: 5,
      borderRadius: 20,
    },
  });
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
    textTransform: "capitalize",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
});
