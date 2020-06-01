import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Rating } from "react-native-ratings";
const tablet = Dimensions.get("window").height;
const ResDetails = ({ result }) => {
  return (
    <View style={[styles.container]}>
      {/* <Text style={styles.text}>{result.title}</Text> */}
      <Image
        style={[
          styles.image,
          {
            height:
              tablet <= 800
                ? Dimensions.get("window").height / 6 - 3
                : Dimensions.get("window").height / 4 - 15,
            width: Dimensions.get("window").width / 2 + 70,
          },
        ]}
        source={{ uri: result.image_url }}
      />
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
    justifyContent: "space-around",
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
    // height: 120,
    // width: 250,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
  },
});

export default ResDetails;
