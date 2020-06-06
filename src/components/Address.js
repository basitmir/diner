import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Address = ({ result, tablet, tabWidth }) => {
  return (
    <LinearGradient
      start={[0.9, 0.9]}
      end={[0.8, -0.4]}
      colors={[
        "#f2ead3",
        "#f2ead3",
        "white",
        "#f2ead3",
        "white",
        "#f2ead3",
        "white",
        "#f2ead3",
        "white",
        "#f2ead3",
        "white",
        "#f2ead3",
        "white",
        "#f2ead3",
        "white",
        "#f2ead3",
      ]}
      //   location={[0.8, 0.5, 1.0, 0.3]}
      style={[
        styles.addressTopView,
        {
          paddingVertical:
            tablet <= 862 ? 20 : Math.abs(tablet - tabWidth - 190),
        },
      ]}
    >
      <View>
        <Text style={styles.addressView}>{result.location.address1}</Text>
        <Text style={[styles.addressView, { fontSize: 28 }]}>
          {result.location.city}, {result.location.state},{" "}
          {result.location.country}, {result.location.zip_code}
        </Text>
        <Text
          style={[styles.addressView, { fontSize: 22, fontWeight: "bold" }]}
        >
          {result.phone}
        </Text>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  addressTopView: {
    // backgroundColor: "red",
    marginHorizontal: 6,
    marginVertical: 3,
    borderRadius: 6,
    paddingVertical: 20,
  },
  addressView: {
    textAlign: "center",
    // alignSelf: "center",
    fontSize: 30,
    color: "#d1b66b",
  },
});
export default Address;
