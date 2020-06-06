import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Linking,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import BoxDetails from "../components/BoxDetails";
import Address from "../components/Address";
import KnowMore from "../components/KnowMore";
import yelp from "../../api/yelp";
import * as Animatable from "react-native-animatable";
const MoreImages = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;
  const tablet = Dimensions.get("window").height;
  const tabWidth = Dimensions.get("window").width;
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
          // console.log("items");
          return <Text>{item.title}</Text>;
        }}
      />
    );
    // console.log(fav);
  }
  return (
    <>
      {/* {result.categories.map((category, id) => console.log(category.title))} */}
      {/* {console.log(fav)} */}
      {/* <ScrollView> */}
      <ScrollView>
        <SliderBox
          images={result.photos}
          sliderBoxHeight={
            tablet <= 800
              ? parseInt(Dimensions.get("window").height / 2 - 50)
              : parseInt(Dimensions.get("window").height / 2)
          }
          autoplay
          circleLoop
          ImageComponentStyle={{ borderRadius: 8, width: "98%", marginTop: 5 }}
          imageLoadingColor="#d1b66b"
          // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#d1b66b"
          inactiveDotColor="white"
        />

        <Animatable.Text
          animation="pulse"
          easing="linear"
          iterationCount="infinite"
          // iterationDelay={3000}
          style={[
            styles.check,
            result.is_closed ? styles.closeColor : styles.openColor,
          ]}
        >
          {result.is_closed ? "Closed" : "Opened"}
        </Animatable.Text>
        <View style={styles.three}>
          <BoxDetails
            title="RATING"
            icon="star"
            info={[{ title: result.rating.toString() }]}
            size={32}
            weight="normal"
            tablet={tabWidth}
          />
          <BoxDetails
            title="REVIEWS"
            icon="thumbs-up"
            info={[{ title: result.review_count.toString() }]}
            size={32}
            weight="normal"
            tablet={tabWidth}
          />
          <BoxDetails
            title="POPULAR"
            icon="magic"
            info={result.categories}
            size={11}
            weight="bold"
            tablet={tabWidth}
          />
        </View>
        <Address result={result} tablet={tablet} tabWidth={tabWidth} />
        <KnowMore url={result.url} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  three: {
    flexDirection: "row",
    marginTop: 4,
    paddingVertical: 10,
    justifyContent: "space-around",
    marginHorizontal: 6,
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
