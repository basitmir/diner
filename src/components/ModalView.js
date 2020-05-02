import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
const list = [
  { name: "Denmark" },
  { name: "Austria" },
  { name: "Switzerland" },
  { name: "Czech Republic" },
  { name: "Germany" },
  { name: "Australia" },
  { name: "Belgium" },
  { name: "Canada" },
  { name: "United Kingdom" },
  { name: "Malaysia" },
  { name: "New Zealand" },
  { name: "Singapore" },
  { name: "United States" },
  { name: "Argentina" },
  { name: "Chile" },
  { name: "Spain" },
  { name: "Mexico" },
  { name: "Finland" },
  { name: "Philippines" },
  { name: "France" },
  { name: "Italy" },
  { name: "Japan" },
  { name: "Norway" },
  { name: "The Netherlands" },
  { name: "Poland" },
  { name: "Brazil" },
  { name: "Portugal" },
  { name: "Sweden" },
  { name: "Turkey" },
  { name: "Hong Kong" },
  { name: "Taiwan" },
  { name: "Republic of Ireland" },
];
const ModalView = ({ modalVisible, closeModal, newLocation }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        // statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AntDesign
              style={styles.close}
              onPress={() => closeModal(!modalVisible)}
              name="closecircle"
              size={25}
            />
            <FlatList
              style={styles.list}
              showsVerticalScrollIndicator={false}
              data={list}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.click}
                    onPress={() => {
                      console.log(item.name);
                      newLocation(item.name);
                      closeModal(!modalVisible);
                    }}
                  >
                    <LinearGradient
                      start={[0.9, 0.9]}
                      end={[0.8, -0.4]}
                      colors={[
                        "#edd595",
                        "#edd595",
                        "white",
                        "#edd595",
                        "white",
                        "#edd595",
                        "white",
                        "#edd595",
                        "white",
                        "#edd595",
                        "white",
                        "#edd595",
                        "white",
                        "#edd595",
                        "white",
                        "#edd595",
                      ]}
                      //   location={[0.8, 0.5, 1.0, 0.3]}
                      style={styles.listGradient}
                    >
                      <Text style={styles.listText}>{item.name}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />

            {/* <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                closeModal(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  close: {
    alignSelf: "flex-end",
    paddingBottom: 3,
    color: "#d1b66b",
    paddingRight: 5,
  },
  list: {
    marginRight: 25,
  },
  listGradient: {
    marginBottom: 10,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,

    // alignSelf: "center",
    // borderColor: "red",
    // borderWidth: 1,
    // width: "100%",
  },
  listText: {
    // borderColor: "red",
    // borderWidth: 1,
    // fontWeight: "bold",
    // color: "white",
    color: "#cca331",
    textAlign: "center",
    width: "100%",
    fontSize: 30,
    // marginBottom: 10,
  },
  click: {
    width: "100%",
  },
  modalView: {
    margin: 68,
    backgroundColor: "#f2ead3",
    opacity: 0.8,
    borderRadius: 10,
    padding: 25,
    paddingTop: 5,
    paddingRight: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default ModalView;
