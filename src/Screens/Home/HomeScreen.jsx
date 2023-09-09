import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./Home-styled";
import { View, Image, Text, Pressable } from "react-native";
import LogoutIcon from "../../img/icons/logout";
import GridIcon from "../../img/icons/grid";
import AddIcon from "../../img/icons/add";
import UserIcon from "../../img/icons/user";

const HomeScreen = () => {
  const navigation = useNavigation();

  const toCreatePostScreen = () => {
    navigation.navigate("Створити публікацію");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Публікації</Text>
        <Pressable>
          <LogoutIcon />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Image
          source={require("../../img/user-avatar.png")}
          style={styles.avatarImg}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.bottomTabs}>
        <Pressable style={styles.btnBottomTabs}>
          <GridIcon />
        </Pressable>
        <Pressable
          onPress={toCreatePostScreen}
          style={{ ...styles.btnBottomTabs, backgroundColor: "#FF6C00" }}
        >
          <AddIcon style={{ color: "#fff" }} />
        </Pressable>
        <Pressable style={styles.btnBottomTabs}>
          <UserIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
