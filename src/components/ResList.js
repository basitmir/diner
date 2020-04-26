import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResDetails from "./ResDetails";
const ResList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("MoreImages")}>
              <ResDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  listStyle: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
    color: "#d1b66b",
  },
});
export default ResList;
