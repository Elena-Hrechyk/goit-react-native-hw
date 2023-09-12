import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import styles from "./CommentsScreen-styled";
import SendIcon from "../../img/icons/send";

const CommentScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="height"
        style={{ flex: 1, justifyContent: "flex-end" }}
        keyboardVerticalOffset={-200}
      >
        <View style={styles.container}>
          <Image
            source={require("../../img/test-photo2.png")}
            style={styles.imagePost}
          />
          <ScrollView>
            {/* comment stranges */}
            <View style={styles.boxComment}>
              <Image
                style={styles.avatar}
                source={require("../../img/default-avatar.png")}
              />
              <View style={styles.boxTextComments}>
                <Text style={styles.textComment}>
                  Really love your most recent photo. I've been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
                <Text style={styles.dateComment}>09 червня, 2020 | 08:40</Text>
              </View>
            </View>
            {/* owners comment */}
            <View
              style={{
                ...styles.boxComment,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  ...styles.boxTextComments,
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 6,
                }}
              >
                <Text style={styles.textComment}>
                  A fast 50mm like f1.8 would help with the bokeh. I've been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text style={{ ...styles.dateComment, textAlign: "left" }}>
                  09 червня, 2020 | 09:14
                </Text>
              </View>
              <Image
                style={styles.avatar}
                source={require("../../img/user-avatar.png")}
              />
            </View>
          </ScrollView>
          {/* Input comment */}
          <View style={styles.boxInputComment}>
            <TextInput
              placeholder="Коментувати..."
              placeholderTextColor={"#BDBDBD"}
              style={styles.textInput}
            />
            <Pressable style={styles.sendCommentIcon}>
              <SendIcon />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CommentScreen;
