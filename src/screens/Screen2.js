import React, { useRef, useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  Animated,
  PanResponder,
} from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#192734",
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
  },
  userName: {
    color: "#fff",
    fontSize: 24,
    flex: 1,
  },
  userInfo: { flexDirection: "row", alignItems: "center" },
  buttonContainer: {
    justifyContent: "flex-end",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  infoText: {
    color: "#9b870c",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 10,
  },
  button1: { color: "#4169e1", padding: 10, alignSelf: "center" },
  button2: {
    backgroundColor: "#484848",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  button2Text: { color: "#4169e1", padding: 15 },
  button3: {
    backgroundColor: "#add8e6",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  button3Text: { color: "#fff", padding: 15 },
  button4: {
    borderWidth: 1,
    borderColor: "#add8e6",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
  },
  slider: {
    height: 50,
    width: 50,
    backgroundColor: "#add8e6",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button4Text: {
    alignSelf: "center",
    position: "absolute",
    zIndex: -1,
  },
});

let totalWidth = 0;

const Screen2 = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);

  const pan = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        return true;
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,

      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 0 && gestureState.dx <= totalWidth - 52) {
          pan.setValue(gestureState.dx);
        } else if (gestureState.dx > totalWidth - 52) {
          onEndReached();
          return;
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > totalWidth / 2) {
          Animated.timing(pan, {
            toValue: totalWidth - 52,
            useNativeDriver: true,
          }).start(() => {
            onEndReached();
          });
        } else {
          resetBar();
        }
      },
    })
  ).current;

  const onEndReached = () => {
    setTimeout(() => {
      navigation.navigate("Screen3");
      resetBar();
    }, 500);
  };

  const resetBar = () => {
    Animated.timing(pan, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const onPress = () => {
    alert("Button Press");
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Welcome: </Text>
          <Text style={styles.userName}>{user}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.infoText}>4 variations of Buttons</Text>
          <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.button1}>Press Me</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button2}>
              <Text style={styles.button2Text}>Press Me</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button3}>
              <Text style={styles.button3Text}>Press Me</Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            onLayout={(event) => {
              totalWidth = event.nativeEvent.layout.width;
            }}
            style={styles.button4}
          >
            <Animated.View
              style={{ transform: [{ translateX: pan }] }}
              {...panResponder.panHandlers}
            >
              <View style={styles.slider}>
                <Icon name="diamond" size={20} color="#fff" />
              </View>
            </Animated.View>
            <View style={styles.button4Text}>
              <Text style={{ color: "#4169e1" }}>Slide Me to Continue</Text>
            </View>
          </View>
        </View>
        <SafeAreaView />
      </View>
    </>
  );
};

export default Screen2;
