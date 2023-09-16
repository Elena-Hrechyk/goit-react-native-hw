import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { Pressable } from "react-native";
import FormUserReg from "./src/Screens/FormUserReg/FormUserReg";
import FormLogin from "./src/Screens/FormLogin/FormLogin";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
import MapScreen from "./src/Screens/MapScreen/MapScreen";
import ArrowLeftIcon from "./src/img/icons/arrowLeft";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Registration">
            <MainStack.Screen
              name="Registration"
              component={FormUserReg}
              options={{ headerStyle: { height: 0 } }}
            />
            <MainStack.Screen
              name="Login"
              component={FormLogin}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Публікації",
                headerShown: false,
                headerLeft: null,
              }}
            />
            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{ title: "Коментарі", headerTitleAlign: "center" }}
            />
            <MainStack.Screen
              name="Map"
              component={MapScreen}
              options={({ navigation }) => ({
                title: "Мапа",
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Pressable
                  // onPress={() => navigation.navigate("HomeScreen")}
                  >
                    <ArrowLeftIcon />
                  </Pressable>
                ),
                headerLeftContainerStyle: {
                  left: 16,
                },
              })}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
