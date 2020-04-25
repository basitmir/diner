import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import yelp from "../api/yelp";
export default () => {
  const [business, setBusiness] = useState([]);
  const [errorMsg, setError] = useState(null);

  useEffect(() => {
    searchApi("Pasta");
  }, []);
  const handelSubmit = () => {
    console.log("searchTerm submitted");
  };
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setBusiness(response.data.businesses);
    } catch (err) {
      //   console.log(err);
      setError("Something went wrong");
      // return <Text>Something</Text>;
    }
  };
  return [business, errorMsg, searchApi];
};
