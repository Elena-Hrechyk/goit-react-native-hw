import React from "react";
import { useState } from "react";
import styles from "./PostsScreen-styled";
import { View, Image, Text, Pressable, ScrollView } from "react-native";
import MappinIcon from "../../img/icons/mappin";
import MessageIcon from "../../img/icons/message";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={require("../../img/user-avatar.png")}
          style={styles.avatarImg}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
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
            <Pressable style={styles.postInfoLeftSide}>
              <MessageIcon />
              <Text style={styles.messageCount}>0</Text>
            </Pressable>
            <Pressable style={styles.postInfoRithSite}>
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
  );
};

export default PostsScreen;
