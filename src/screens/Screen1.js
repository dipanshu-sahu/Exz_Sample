import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../actions";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 20 },
  buttonContainer: {
    backgroundColor: "#000",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
  },
  inputBox: {
    backgroundColor: "#ddd",
    padding: 5,
  },
  buttonText: { color: "#fff" },
});
const Screen1 = ({ navigation }) => {
  const [user, enterUser] = useState("");
  const dispatch = useDispatch();

  const handleEnter = () => {
    if (user) {
      dispatch(setUser(user));
      navigation.navigate("Screen2");
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <Text style={styles.text}>Welcome</Text>
          <TextInput
            onChangeText={(val) => enterUser(val)}
            value={user}
            style={styles.inputBox}
            placeholder="Enter Your Name"
            maxLength={50}
          />
          <TouchableWithoutFeedback onPress={handleEnter}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Enter</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
};

export default Screen1;
