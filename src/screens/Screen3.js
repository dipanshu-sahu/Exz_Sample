import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  welcomeText: {
    color: "#000",
    fontSize: 24,
  },
  userName: {
    color: "#000",
    fontSize: 24,
    flex: 1,
  },
  userInfo: { flexDirection: "row", alignItems: "center" },
});

const Screen3 = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <View style={styles.flexContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Welcome: </Text>
          <Text style={styles.userName}>{user}</Text>
        </View>
      </View>
    </>
  );
};

export default Screen3;
