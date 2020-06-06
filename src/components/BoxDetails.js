import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const BoxDetails = ({ title, icon, info, size, weight, tablet }) => {
  return (
    <View style={styles.boxContainer}>
      <FontAwesome
        style={{ color: "#d1b66b", alignSelf: "center" }}
        name={icon}
        size={tablet <= 408 ? 25 : 50}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.box}>{title}</Text>
        <FlatList
          keyExtractor={(info) => info.title}
          data={info}
          renderItem={({ item }) => {
            return (
              <Text
                style={[styles.details, { fontSize: size, fontWeight: weight }]}
              >
                {item.title}
              </Text>
            );
          }}
        />
        {/* <Text style={styles.details}></Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    // fontSize: 28,
    textTransform: "uppercase",
    alignSelf: "center",
    fontSize: 28,
    color: "#b3adad",
    // flexShrink: 1,
  },
  boxContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    backgroundColor: "#f2ead3",
    paddingHorizontal: 8,
    paddingVertical: 12,
    flex: 3,
    marginRight: 6,
    justifyContent: "center",
  },
  box: {
    // borderWidth: 1,
    fontWeight: "bold",
    color: "#c4a54f",
    fontSize: 12,
    borderColor: "red",
    paddingHorizontal: 10,
    // backgroundColor: "#f2ead3",
  },
});
export default BoxDetails;
