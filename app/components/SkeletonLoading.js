import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const SkeletonLoading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBox}></View>
      <View style={styles.containerBox}></View>
      <View style={styles.containerBox}></View>
    </View>
  );
};

export default SkeletonLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    width: "100%",
  },
  containerBox: {
    backgroundColor: Colors.gray8,
    padding: 24,
    marginTop: 20,
  },
});
