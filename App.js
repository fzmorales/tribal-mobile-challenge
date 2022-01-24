import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { enableScreens } from "react-native-screens";
enableScreens();
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/screens/Home";
import BusinessEdit from "./app/screens/BusinessEdit";
import BusinessDetail from "./app/screens/BusinessDetail";
import PersonEdit from "./app/screens/PersonEdit";
import Colors from "./app/constants/Colors";
import { QueryClient, QueryClientProvider } from "react-query";
import EditCircle from "./app/icons/EditCircle";
// React Query Warning for timer in Android on this version
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const HeaderTitle = (props) => {
  return (
    <View>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: Colors.secondary },
              headerTitle: () => (
                <View>
                  <Text style={styles.headerTitle}>Business</Text>
                </View>
              ),
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={({ route, navigation }) => ({
              headerStyle: { backgroundColor: Colors.primary },
              headerBackTitleVisible: false,
              headerTintColor: Colors.gray1,
              headerTitle: () => <HeaderTitle title={route.params.title} />,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("BusinessEdit", {
                      id: route.params.id,
                      name: route.params.title,
                      title: "Edit",
                    })
                  }
                >
                  <EditCircle />
                </TouchableOpacity>
              ),
            })}
            name="BusinessDetail"
            component={BusinessDetail}
          />
          <Stack.Screen
            options={({ route }) => ({
              headerStyle: { backgroundColor: Colors.primary },
              headerBackTitleVisible: false,
              headerTintColor: Colors.gray1,
              headerTitle: () => (
                <HeaderTitle title={`${route.params.title} Business`} />
              ),
            })}
            name="BusinessEdit"
            component={BusinessEdit}
          />

          <Stack.Screen
            options={({ route }) => ({
              headerStyle: { backgroundColor: Colors.primary },
              headerBackTitleVisible: false,
              headerTintColor: Colors.gray1,
              headerTitle: () => (
                <HeaderTitle title={`${route.params.title} Person`} />
              ),
            })}
            name="PersonEdit"
            component={PersonEdit}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.gray1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
