import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPersonList } from "../modules/services/Person";
import UserItem from "../components/UserItem";
import Colors from "../constants/Colors";
import PlusCircle from "../icons/PlusCircle";
import HugPerson from "../icons/HugPerson";
import Refresh from "../icons/Refresh";
import SkeletonLoading from "../components/SkeletonLoading";

const BusinessDetail = ({ route, navigation }) => {
  const { id, title } = route.params;
  const [isFetching, setIsFetching] = useState(false);
  const queryOptions = {
    onSettled: () => {
      setIsFetching(false);
    },
  };
  const {
    isLoading,
    isRefetching,
    data: persons = [],
    refetch,
  } = useQuery("persons", () => getPersonList(id), queryOptions);
  const onRefresh = () => {
    setIsFetching(true);
    refetch();
  };
  const EmptyPerson = () => {
    return (
      <View style={styles.emptyContainer}>
        <HugPerson />
        <View style={styles.emptyDescriptionBox}>
          <Text style={styles.emptyDescriptionText}>
            {"It seems like you haven't add any person to your team yet"}
          </Text>
          <TouchableOpacity
            style={styles.emptyActionButton}
            onPress={() =>
              navigation.navigate("PersonEdit", {
                id,
                title: "Add",
                businessName: title,
              })
            }
          >
            <Text style={styles.emptyActionButtonText}>
              Add a member to your team
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.emptyRefresh}
            onPress={() => refetch()}
          >
            <Refresh />
            <Text style={styles.emptyRefreshText}>Reload</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading || isRefetching ? (
        <SkeletonLoading />
      ) : persons.length === 0 ? (
        <EmptyPerson />
      ) : (
        <>
          <Text style={styles.title}>Persons</Text>
          <FlatList
            style={{ width: "100%" }}
            data={persons}
            onRefresh={() => onRefresh()}
            refreshing={isFetching}
            onEndReachedThreshold={0.5}
            keyExtractor={(item) => item.personId}
            renderItem={({ item }) => (
              <UserItem
                item={item}
                onPress={() =>
                  navigation.navigate("PersonEdit", {
                    title: "Edit",
                    id,
                    personParam: item,
                    businessName: title,
                  })
                }
              />
            )}
          />
          <View style={styles.actionButtonContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PersonEdit", {
                  id,
                  title: "Add",
                  businessName: title,
                })
              }
            >
              <PlusCircle colorFill={Colors.primary} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default BusinessDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    paddingLeft: 14,
    marginTop: 10,
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyDescriptionBox: {
    marginHorizontal: 40,
  },
  emptyDescriptionText: {
    color: Colors.gray4,
    textAlign: "center",
  },
  emptyActionButton: {
    padding: 16,
    marginTop: 15,
    backgroundColor: Colors.primary,
  },
  emptyActionButtonText: {
    textAlign: "center",
    fontWeight: "600",
    color: Colors.white,
  },
  emptyRefresh: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  emptyRefreshText: {
    color: Colors.gray4,
  },
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingBottom: 30,
    paddingRight: 30,
  },
});
