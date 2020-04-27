import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";
const ResDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{result.title}</Text> */}
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.innerContainer}>
        <Rating
          // type="heart"

          type="custom"
          startingValue={result.rating}
          ratingCount={5}
          imageSize={17}
          readonly={true}
          ratingColor="#d1b66b"
          // ratingBackgroundColor={"red"}
          // showRating
          // onFinishRating={this.ratingCompleted}
        />
        <Text style={{ color: "#bab6b6" }}>
          {" "}
          Reviews: {result.review_count}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  name: {
    color: "#c4a54f",
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 3,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "red",
  },
});

export default ResDetails;
