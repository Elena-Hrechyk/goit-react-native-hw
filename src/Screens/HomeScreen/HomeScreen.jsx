import React from "react";
import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logoutDB } from "../../redux/auth/authOperations";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import Profile from "../ProfileScreen/ProfileScreen";
import TabBarIconWrapper from "../../components/TabBarIconWrapper";
import GridIcon from "../../img/icons/grid";
import AddIcon from "../../img/icons/add";
import UserIcon from "../../img/icons/user";
import LogoutIcon from "../../img/icons/logout";
import ArrowLeftIcon from "../../img/icons/arrowLeft";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "AddPost") {
            iconName = focused ? (
              <TabBarIconWrapper children={<AddIcon stroke={"#FFF"} />} />
            ) : (
              <AddIcon stroke={"#212121"} />
            );
          } else if (route.name === "Posts") {
            iconName = focused ? (
              <TabBarIconWrapper children={<GridIcon stroke={"#FFF"} />} />
            ) : (
              <GridIcon stroke={"#212121"} />
            );
          } else if (route.name === "Profile") {
            iconName = focused ? (
              <TabBarIconWrapper children={<UserIcon stroke={"#FFF"} />} />
            ) : (
              <UserIcon stroke={"#212121"} />
            );
          }
          return iconName;
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            color: "#212121",
          },
          tabBarShowLabel: false,
          headerRight: () => (
            <Pressable
              onPress={() => {
                dispatch(logoutDB());
                navigation.navigate("Login");
              }}
            >
              <LogoutIcon />
            </Pressable>
          ),
          headerRightContainerStyle: {
            right: 16,
          },
        }}
      />
      <Tabs.Screen
        name="AddPost"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            color: "#212121",
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            display: "none",
          },
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("Posts")}>
              <ArrowLeftIcon />
            </Pressable>
          ),
          headerLeftContainerStyle: {
            left: 16,
          },
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

export default HomeScreen;
