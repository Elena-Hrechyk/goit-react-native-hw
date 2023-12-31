import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { View, Image, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  selectEmail,
  selectIsGoingToLogin,
  selectIsLogin,
  selectUsername,
} from "../../redux/auth/authSelectors";
import styles from "./PostsScreen-styled";
import MappinIcon from "../../img/icons/mappin";
import MessageIcon from "../../img/icons/message";

const PostsScreen = () => {
  const userName = useSelector(selectUsername);
  const userEmail = useSelector(selectEmail);
  const isLogin = useSelector(selectIsLogin);
  const isGoingToLogin = useSelector(selectIsGoingToLogin);

  const navigation = useNavigation();

  return (
    <>
      {isGoingToLogin || isLogin ? (
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <Image
              source={require("../../img/user-avatar.png")}
              style={styles.avatarImg}
            />
            <View>
              <Text style={styles.userName}>{userName}</Text>
              <Text style={styles.userEmail}>{userEmail}</Text>
            </View>
          </View>
          <ScrollView style={styles.posts}>
            <View style={styles.postItem}>
              <Image
                source={require("../../img/test-photo1.png")}
                style={styles.postImg}
              />
              <Text style={styles.postName}>Ліс</Text>
              <View style={styles.postInfo}>
                <Pressable
                  style={styles.postInfoLeftSide}
                  onPress={() => navigation.navigate("Comments")}
                >
                  <MessageIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
                <Pressable
                  style={styles.postInfoRithSite}
                  onPress={() => navigation.navigate("Map")}
                >
                  <MappinIcon />
                  <Text style={styles.mapLink}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.postItem}>
              <Image
                source={require("../../img/test-photo2.png")}
                style={styles.postImg}
              />
              <Text style={styles.postName}>Захід на Чорному морі</Text>
              <View style={styles.postInfo}>
                <Pressable style={styles.postInfoLeftSide}>
                  <MessageIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
                <Pressable style={styles.postInfoRithSite}>
                  <MappinIcon />
                  <Text style={styles.mapLink}>Ukraine</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.postItem}>
              <Image
                source={require("../../img/test-photo3.png")}
                style={styles.postImg}
              />
              <Text style={styles.postName}>Старий будиночок у Венеції</Text>
              <View style={styles.postInfo}>
                <Pressable style={styles.postInfoLeftSide}>
                  <MessageIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
                <Pressable style={styles.postInfoRithSite}>
                  <MappinIcon />
                  <Text style={styles.mapLink}>Italy</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text>QWERTY</Text>
        </View>
      )}
    </>
  );
};

export default PostsScreen;
