import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, changeTerm, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather
        style={{ marginHorizontal: 5, color: "#d1b66b" }}
        name="search"
        size={30}
      />
      <TextInput
        style={styles.textStyle}
        placeholder="Search"
        value={term}
        onChangeText={changeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#E0E0E0",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  textStyle: {
    // borderWidth: 1,
    // borderColor: "red",
    fontSize: 18,
    flex: 1,
    // height: 50,
  },
});
export default SearchBar;
