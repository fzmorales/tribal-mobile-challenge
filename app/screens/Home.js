import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { getBusinessList } from "../modules/services/Business";
import { useQuery } from "react-query";
import ListItem from "../components/ListItem";
import PlusCircle from "../icons/PlusCircle";
import Colors from "../constants/Colors";
import SkeletonLoading from "../components/SkeletonLoading";
import Refresh from "../icons/Refresh";
import BusinessIcon from "../icons/BusinessIcon";

const Home = ({ navigation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const queryOptions = {
    onSettled: () => {
      setIsFetching(false);
    },
  };
  const {
    isLoading,
    isRefetching,
    data: businesses = [],
    refetch,
  } = useQuery("businesses", getBusinessList, queryOptions);

  const onRefresh = () => {
    setIsFetching(true);
    refetch();
  };
  const EmptyBusiness = () => {
    return (
      <View style={styles.emptyContainer}>
        <BusinessIcon />
        <View style={styles.emptyDescriptionBox}>
          <Text style={styles.emptyDescriptionText}>
            {"It seems like you haven't add any business yet"}
          </Text>
          <TouchableOpacity
            style={styles.emptyActionButton}
            onPress={() =>
              navigation.navigate("BusinessEdit", {
                id: "",name: "",title: "Add"
              })
            }
          >
            <Text style={styles.emptyActionButtonText}>
              Create your first business
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
      ) : businesses.length === 0 ? (
        <EmptyBusiness />
      ) : (
        <>
          <FlatList
            style={styles.listContainer}
            data={businesses}
            onRefresh={() => onRefresh()}
            refreshing={isFetching}
            onEndReachedThreshold={0.5}
            keyExtractor={(item) => item.businessId}
            renderItem={({ item, index }) => (
              <ListItem
                name={item.name}
                id={item.businessId}
                index={index}
                onPress={() =>
                  navigation.navigate("BusinessDetail", {
                    title: item.name,
                    id: item.businessId,
                  })
                }
              />
            )}
          />
          <View style={styles.actionButtonContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BusinessEdit", {
                  id: "", name: "", title: "Add"
                })
              }
            >
              <PlusCircle colorFill={Colors.secondary} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
  },
  listContainer:{
    width: "100%"
  },
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 30,
    marginRight: 30,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyDescriptionBox: {
    marginHorizontal: 40,
    paddingTop: 10,
  },
  emptyDescriptionText: {
    color: Colors.gray4,
    textAlign: "center",
  },
  emptyActionButton: {
    padding: 16,
    marginTop: 15,
    backgroundColor: Colors.secondary,
  },
  emptyActionButtonText: {
    textAlign: "center",
    fontWeight: "600",
    color: Colors.gray3,
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
});
