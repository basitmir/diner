import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../../api/yelp";
const MoreImages = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;
  useEffect(() => {
    getResult(id);
  }, []);
  // console.log(result);
  const getResult = async (id) => {
    const result = await yelp.get(`/${id}`);
    setResult(result.data);
  };
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    width: null,
  },
});
export default MoreImages;
