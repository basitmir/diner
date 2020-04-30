import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MoreImages from "./src/screens/MoreImages";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import ModalView from "./src/components/ModalView";
const Stack = createStackNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = (val) => {
    console.log(!val);
    setModalVisible(!val);
  };
  return (
    <>
      {modalVisible ? (
        <ModalView open={modalVisible} closeModal={closeModal} />
      ) : null}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f2ead3",
              // backgroundColor: "#69687f",
            },
            headerTintColor: "#d1b66b",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Restaurant",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    setModalVisible(modalVisible === true ? false : true)
                  }
                  title="Info"
                  color="#fff"
                >
                  <Animatable.View
                    animation="rotate"
                    easing="linear"
                    iterationCount="infinite"
                    iterationDelay={10000}
                  >
                    <FontAwesome
                      style={{ marginHorizontal: 15, color: "#d1b66b" }}
                      name="globe"
                      size={30}
                    />
                  </Animatable.View>
                </TouchableOpacity>
              ),
            }}
          />
          {/* <Stack.Screen name="Search" component={Search} /> */}
          <Stack.Screen
            name="MoreImages"
            component={MoreImages}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
