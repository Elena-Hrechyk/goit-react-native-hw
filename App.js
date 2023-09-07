import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import FormUserReg from "./src/Screens/FormUserReg/FormUserReg";
import FormLogin from "./src/Screens/FormLogin/FormLogin";
import Publications from "./src/Screens/Publications/Publications";

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
              name="Публікації"
              component={Publications}
              options={{ title: null, headerShown: false, headerLeft: null }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
