import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurant from "../../hooks/restaurantHook";
import ResList from "../components/ResList";
import * as Animatable from "react-native-animatable";
const HomeScreen = ({ route, location }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [msg, setMsg] = useState("Please Wait ...");
  const [business, errorMsg, searchApi] = useRestaurant(location);
  const handelTerm = (val) => {
    setSearchTerm(val);
  };
  // console.log(business.length);
  const filterResultsByPrice = (price) => {
    return business.filter((result) => {
      if (result.price !== undefined) {
        return result.price.length === price;
      }
    });
  };
  // setTimeout(() => {
  //   console.log('hello');
  //     }, 3000)
  return (
    <>
      <SearchBar
        term={searchTerm}
        changeTerm={handelTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMsg ? (
        <View style={styles.main}>
          <Animatable.Text
            animation="flash"
            easing="linear"
            iterationCount="infinite"
            iterationDelay={3000}
            style={styles.text}
          >
            {errorMsg}
          </Animatable.Text>
        </View>
      ) : null}
      {/* <Text style={styles.text}>We found {business.length} results</Text> */}
      {business.length !== 0 ? (
        <ScrollView>
          <ResList results={filterResultsByPrice(1)} title="Cost Effective" />
          <ResList results={filterResultsByPrice(2)} title="Bit Pricier" />
          <ResList results={filterResultsByPrice(3)} title="Big Spender" />
        </ScrollView>
      ) : (
        <View style={styles.main}>
          <Text style={styles.text}>{msg}</Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    height: "80%",
  },
  text: {
    fontSize: 30,
    color: "#d1b66b",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default HomeScreen;
