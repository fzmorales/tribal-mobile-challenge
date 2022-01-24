import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";

const BusinessForm = (props) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Business name"
        placeholderTextColor={Colors.gray6}
        onChangeText={props.onChangeText}
        value={props.text}
      />
      <TouchableOpacity style={styles.submitButton} onPress={props.onSave}>
        <Text style={styles.submitButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderWidth: 0,
    backgroundColor: Colors.white,
    color: Colors.gray2,
  },
  submitButton: {
    padding: 12,
    margin: 12,
    backgroundColor: Colors.primary,
  },
  submitButtonText: {
    textAlign: "center",
    fontWeight: "600",
  },
});

export default BusinessForm;
