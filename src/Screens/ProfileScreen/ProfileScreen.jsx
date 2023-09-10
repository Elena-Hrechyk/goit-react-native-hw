import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import styles from "./ProfileScreen-styled";
import LogoutIcon from "../../img/icons/logout";
import RemoveAvatar from "../../img/icons/removeAvatar";
import MappinIcon from "../../img/icons/mappin";
import MessageIcon from "../../img/icons/message";
import ThumbsUpIcon from "../../img/icons/thumbsUp";

function Profile() {
  return (
    <ImageBackground
      source={require("../../img/photo-bg.png")}
      style={{ height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../img/user-avatar.png")}
            style={styles.avatarImg}
          />
          <Pressable style={styles.iconAddDelPhoto}>
            <RemoveAvatar />
          </Pressable>
        </View>
        <Pressable style={styles.iconLogout}>
          <LogoutIcon />
        </Pressable>
        <Text style={styles.username}>Natali Romanova</Text>
        <ScrollView style={styles.posts}>
          <View style={styles.postItem}>
            <Image
              source={require("../../img/test-photo1.png")}
              style={styles.postImg}
            />
            <Text style={styles.postName}>Ліс</Text>
            <View style={styles.postInfo}>
              <View style={styles.postInfoLeftSide}>
                <Pressable style={styles.postInfoLeftSide}>
                  <MessageIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
                <Pressable style={styles.postInfoLeftSide}>
                  <ThumbsUpIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
              </View>

              <Pressable style={styles.postInfoRithSite}>
                <MappinIcon />
                <Text style={styles.mapLink}>Ukraine</Text>
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
              <View style={styles.postInfoLeftSide}>
                <Pressable style={styles.postInfoLeftSide}>
                  <MessageIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
                <Pressable style={styles.postInfoLeftSide}>
                  <ThumbsUpIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
              </View>

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
              <View style={styles.postInfoLeftSide}>
                <Pressable style={styles.postInfoLeftSide}>
                  <MessageIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
                <Pressable style={styles.postInfoLeftSide}>
                  <ThumbsUpIcon />
                  <Text style={styles.messageCount}>0</Text>
                </Pressable>
              </View>

              <Pressable style={styles.postInfoRithSite}>
                <MappinIcon />
                <Text style={styles.mapLink}>Italy</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default Profile;
