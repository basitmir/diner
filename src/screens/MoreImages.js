import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import BoxDetails from "../components/BoxDetails";
import yelp from "../../api/yelp";
const MoreImages = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;
  var fav = null;
  useEffect(() => {
    getResult(id);
  }, []);
  const getResult = async (id) => {
    const result = await yelp.get(`/${id}`);
    setResult(result.data);
  };
  if (!result) {
    return null;
  }
  if (result) {
    fav = (
      <FlatList
        // keyExtractor={(result.categories.title) => result.categories.title}
        data={result.categories}
        renderItems={({ item }) => {
          console.log("items");
          return <Text>{item.title}</Text>;
        }}
      />
    );
    console.log(fav);
  }
  return (
    <View>
      {/* {result.categories.map((category, id) => console.log(category.title))} */}
      {/* {console.log(fav)} */}
      <SliderBox
        images={result.photos}
        sliderBoxHeight={300}
        autoplay
        circleLoop
        ImageComponentStyle={{ borderRadius: 8, width: "98%", marginTop: 5 }}
        imageLoadingColor="#d1b66b"
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#d1b66b"
        inactiveDotColor="white"
      />
      <Text
        style={[
          styles.check,
          result.is_closed ? styles.closeColor : styles.openColor,
        ]}
      >
        {result.is_closed ? "Closed" : "Opened"}
      </Text>
      <View style={styles.three}>
        <BoxDetails
          title="RATING"
          icon="star"
          info={[{ title: result.rating.toString() }]}
          size={32}
          weight="normal"
        />
        <BoxDetails
          title="REVIEWS"
          icon="thumbs-up"
          info={[{ title: result.review_count.toString() }]}
          size={32}
          weight="normal"
        />
        <BoxDetails
          title="POPULAR"
          icon="magic"
          info={result.categories}
          size={11}
          weight="bold"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  three: {
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  image: {
    flex: 1,
    height: 200,
    width: null,
  },
  openColor: {
    backgroundColor: "#9fdf9f",
  },
  closeColor: {
    backgroundColor: "#ffad99",
  },
  check: {
    marginTop: 10,
    paddingHorizontal: 100,
    paddingVertical: 10,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 40,
  },
});
export default MoreImages;
