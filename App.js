import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MoreImages from "./src/screens/HomeScreen";
// import SearchBar from "./src/screens/HomeScreen";
import ResList from "./src/screens/HomeScreen";
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f2ead3",
            // backgroundColor: "#69687f",
          },
          headerTintColor: "#c9ba8e",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Restaurant" }}
        />
        {/* <Stack.Screen name="Search" component={Search} /> */}
        <Stack.Screen name="MoreImages" component={MoreImages} />
        <Stack.Screen name="ResList" component={ResList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
