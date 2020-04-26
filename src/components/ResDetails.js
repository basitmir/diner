import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const ResDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.text}>{result.title}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
  },
});

export default ResDetails;
