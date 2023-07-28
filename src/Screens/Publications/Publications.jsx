import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import AddPost from "../AddPublication/AddPublication";
import Profile from "../Profile/Profile";
import GridImages from "../GridImages/GridImages";
import styles from "./Publication-styled";

const Tabs = createBottomTabNavigator();

const Publication = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "AddPublication") {
            iconName = focused ? (
              <AntDesign name="plus" size={24} color="#FF6C00" />
            ) : (
              <AntDesign name="plus" size={24} color="#212121" />
            );
          } else if (route.name === "GridImages") {
            iconName = focused ? (
              <SimpleLineIcons name="grid" size={24} color="#FF6C00" />
            ) : (
              <SimpleLineIcons name="grid" size={24} color="#212121" />
            );
          } else if (route.name === "Profile") {
            iconName = focused ? (
              <Feather name="user" size={24} color="#FF6C00" />
            ) : (
              <Feather name="user" size={24} color="#212121" />
            );
          }
          return iconName;
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: "tomato",
      //   inactiveTintColor: "gray",
      // }}
    >
      <Tabs.Screen
        name="GridImages"
        component={GridImages}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="AddPublication"
        component={AddPost}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            color: "#212121",
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Publication;
