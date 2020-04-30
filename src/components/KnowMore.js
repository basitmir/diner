import React from "react";
import { Linking, View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
const KnowMore = ({ url }) => {
  return (
    <LinearGradient
      start={[0.9, 0.9]}
      end={[0.8, 0.4]}
      colors={["#d1b66b", "#f2ead3"]}
      //   location={[0.8, 0.5, 1.0, 0.3]}
      style={styles.addressTopView}
    >
      <Animatable.View
        animation="wobble"
        easing="linear"
        iterationCount="infinite"
        iterationDelay={10000}
      >
        <Feather style={{ color: "#d1b66b" }} name="chevrons-right" size={30} />
      </Animatable.View>
      <Text style={styles.more} onPress={() => Linking.openURL(url)}>
        Know More
      </Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  more: {
    fontSize: 26,
    color: "#b3adad",
    // borderWidth: 1,
    // borderColor: "red",
  },
  addressTopView: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 6,
    marginVertical: 5,
    // borderRadius: 6,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: 3,
    paddingHorizontal: 30,
    // borderWidth: 1,
    // borderColor: "red",
  },
});
export default KnowMore;
