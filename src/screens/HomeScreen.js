import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import useRestaurant from "../../hooks/restaurantHook";
import GradientHeader from "react-native-gradient-header";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [business, errorMsg, searchApi] = useRestaurant();
  const handelTerm = (val) => {
    setSearchTerm(val);
    console.log(searchTerm);
  };
  return (
    <View>
      <GradientHeader
        title="Title"
        subtitle="Have a nice day Kura"
        gradientColors={["#00416A", "#E4E5E6"]}
        imageSource={require("../../assets/splash.png")}
      />
      <SearchBar
        term={searchTerm}
        changeTerm={handelTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We found {business.length} results</Text>
    </View>
  );
};
export default HomeScreen;
