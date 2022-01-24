import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import BusinessForm from "../components/BusinessForm";
import { useMutation, useQueryClient } from "react-query";
import {
  addBusiness,
  updateBusiness,
  deleteBusiness,
} from "../modules/services/Business";
import Colors from "../constants/Colors";

const BusinessEdit = ({ route, navigation }) => {
  const { id, name, title } = route.params;
  const queryClient = useQueryClient();
  const [text, onChangeText] = useState(name);
  //Add Business mutation
  const addMutation = useMutation(({ name }) => addBusiness(name), {
    onSettled: () => {
      queryClient.invalidateQueries("businesses");
      navigation.navigate("Home");
    },
  });
  // Update Business mutation
  const editMutation = useMutation(({ id, name }) => updateBusiness(id, name), {
    onSettled: () => {
      queryClient.invalidateQueries("businesses");
      navigation.navigate("BusinessDetail", { title: text, id });
    },
  });
  // Delete Business mutation
  const deleteMutation = useMutation(({ id }) => deleteBusiness(id), {
    onSettled: () => {
      queryClient.invalidateQueries("businesses");
      navigation.navigate("Home");
    },
  });
  const handleSubmit = () => {
    if (title === "Edit") {
      editMutation.mutate({ id, name: text });
    } else {
      addMutation.mutate({ name: text });
    }
    queryClient.invalidateQueries("businesses");
  };
  const handleDelete = () => {
    Alert.alert(
      "Delete this Business",
      "Are you sure you want to delete this business? This action will delete all persons within this section",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteMutation.mutate({ id }) },
      ]
    );
  };
  return (
    <View>
      <BusinessForm
        text={text}
        onChangeText={onChangeText}
        onSave={() => handleSubmit()}
      />
      {title === "Edit" && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete()}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BusinessEdit;

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: Colors.danger,
    padding: 12,
    margin: 12,
  },
  deleteButtonText: {
    textAlign: "center",
    color: Colors.white,
    fontWeight: "600",
  },
});
