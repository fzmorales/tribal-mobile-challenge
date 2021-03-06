import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import {
  addPerson,
  updatePerson,
  deletePerson,
} from "../modules/services/Person";
import { useMutation, useQueryClient } from "react-query";
import PersonForm from "../components/PersonForm";
import Colors from "../constants/Colors";
import { emailValidate } from "../modules/resources/utils/regexUtils";

const PersonEdit = ({ route, navigation }) => {
  const { id, title, businessName, personParam } = route.params;
  const [person, setPerson] = useState({
    personId: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    join_date: "",
  });
  const queryClient = useQueryClient();

  // Add person mutation
  const addMutation = useMutation(({ id, person }) => addPerson(id, person), {
    onSuccess: () => {
      queryClient.invalidateQueries("persons");
      navigation.goBack();
    },
    onError: () => {
      alert("An error occurred while saving the changes");
    },
  });
  // Edit person mutation
  const editMutation = useMutation(
    ({ id, personId, person }) => updatePerson(id, personId, person),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("persons");
        navigation.goBack();
      },
      onError: () => {
        alert("An error occurred while saving the changes");
      },
    }
  );
  // Delete Person mutation
  const deleteMutation = useMutation(
    ({ id, personId }) => deletePerson(id, personId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("persons");
        navigation.goBack();
      },
      onError: () => {
        alert("An error occurred while saving the changes");
      },
    }
  );

  useEffect(() => {
    if (title === "Edit") {
      // If person is being edited then fill current info
      setPerson({
        personId: personParam.personId,
        name: personParam.name,
        role: personParam.role,
        email: personParam.email,
        phone: personParam.phone,
        join_date: personParam.join_date,
      });
    }
  }, []);

  const handleChange = (name, value) => {
    setPerson({
      ...person,
      [name]: value,
    });
  };
  const handleDelete = () => {
    Alert.alert(
      "Delete person",
      "Are you sure you want to delete this person?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            deleteMutation.mutate({ id, personId: person.personId }),
        },
      ]
    );
  };

  const validateSubmit = () => {
    let alertMessage = "";
    const filledFields =
      person.name !== "" && person.email !== "" && person.role !== "";
    const emailFormatValid = emailValidate(person.email);
    if (!filledFields) {
      alertMessage += "Please check if all required fields are filled. ";
    } else if (!emailFormatValid) {
      alertMessage += "Please check email format.";
    }
    if (!emailFormatValid || !filledFields) {
      alert(alertMessage);
    }
    return emailFormatValid && filledFields;
  };

  const handleSubmit = () => {
    if (validateSubmit()) {
      if (title === "Edit") {
        editMutation.mutate({ id, personId: person.personId, person });
      } else {
        addMutation.mutate({ id, person });
      }
    }
  };

  return (
    <View>
      <PersonForm
        person={person}
        onSave={() => handleSubmit()}
        businessName={businessName}
        onChangeTextName={(text) => handleChange("name", text)}
        onChangeTextRole={(text) => handleChange("role", text)}
        onChangeTextEmail={(text) => handleChange("email", text)}
        onChangeTextPhone={(text) => handleChange("phone", text)}
        onChangeTextJoinDate={(text) => handleChange("join_date", text)}
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

export default PersonEdit;

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
