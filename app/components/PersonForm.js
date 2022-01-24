import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../constants/Colors";
import { dateToString } from "../modules/resources/utils/dateUtils";
import PersonIcon from "../icons/PersonIcon";
import GroupIcon from "../icons/GroupIcon";
import BuildingIcon from "../icons/BuildingIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import CalendarIcon from "../icons/CalendarIcon";

const PersonForm = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const dateTimeString = dateToString(date);
    props.onChangeTextJoinDate(dateTimeString);
    hideDatePicker();
  };
  return (
    <SafeAreaView>
      <View style={styles.inputContainerDisabled}>
        <BuildingIcon />
        <Text style={styles.inputDisabled}>{props.businessName}</Text>
      </View>
      <View style={styles.inputContainer}>
        <PersonIcon />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={Colors.gray6}
          onChangeText={props.onChangeTextName}
          value={props.person.name}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <GroupIcon />
        <TextInput
          style={styles.input}
          placeholder="Role"
          placeholderTextColor={Colors.gray6}
          onChangeText={props.onChangeTextRole}
          value={props.person.role}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <EmailIcon />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={Colors.gray6}
          onChangeText={props.onChangeTextEmail}
          value={props.person.email}
          autoComplete={"email"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <PhoneIcon />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor={Colors.gray6}
          onChangeText={props.onChangeTextPhone}
          value={props.person.phone}
          keyboardType="numeric"
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity style={styles.inputDate} onPress={showDatePicker}>
        <View style={styles.dateContainer}>
          <CalendarIcon />
          <Text style={styles.placeholder}>Join Date:</Text>
        </View>
        <Text>{props.person.join_date}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity style={styles.submitButton} onPress={props.onSave}>
        <Text style={styles.submitButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainerDisabled: {
    flexDirection: "row",
    backgroundColor: Colors.gray7,
    margin: 12,
    alignItems: "center",
    paddingLeft: 10,
  },
  inputDisabled: {
    color: Colors.gray5,
    padding: 12,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    margin: 12,
    alignItems: "center",
    paddingLeft: 10,
  },
  input: {
    padding: 12,
    borderWidth: 0,
    width: "90%",
    backgroundColor: Colors.white,
    color: Colors.gray2,
  },
  inputDate: {
    margin: 12,
    padding: 12,
    backgroundColor: Colors.white,
    color: Colors.gray2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "row",
  },
  placeholder: {
    paddingLeft: 5,
    color: Colors.gray6,
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

export default PersonForm;
