import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurant from "../../hooks/restaurantHook";
import ResList from "../components/ResList";
const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [business, errorMsg, searchApi] = useRestaurant();
  // console.log(business);
  const handelTerm = (val) => {
    setSearchTerm(val);
    console.log(searchTerm);
  };
  const filterResultsByPrice = (price) => {
    return business.filter((result) => result.price === price);
  };
  return (
    <>
      <SearchBar
        term={searchTerm}
        changeTerm={handelTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {/* <Text style={styles.text}>We found {business.length} results</Text> */}
      <ScrollView>
        <ResList
          navigation={navigation}
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResList
          navigation={navigation}
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResList
          navigation={navigation}
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});
export default HomeScreen;
