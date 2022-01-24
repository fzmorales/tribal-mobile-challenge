import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import EditCircle from "../icons/EditCircle";
import Colors from "../constants/Colors";

const UserItem = (props) => {
  return (
    <View style={styles.container}>
      <View key={props.item.id} style={styles.containerDivided}>
        <View>
          <Text style={styles.textTitle}>{props.item.name}</Text>
          <Text style={styles.text}>{props.item.role}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>{props.item.phone}</Text>
          <TouchableOpacity onPress={props.onPress}>
            <EditCircle />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.text}>{props.item.email}</Text>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 12,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: Colors.gray9,
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  containerDivided: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: Colors.gray2,
  },
  textTitle: {
    color: Colors.gray2,
    fontSize: 18,
  },
});
