import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  imagePost: {
    width: "100%",
    marginBottom: 32,
    borderRadius: 8,
  },
  boxComment: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 125,
  },
  boxTextComments: {
    width: 320,
    padding: 16,
    backgroundColor: "#00000008",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  textComment: {
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  dateComment: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    textAlign: "right",
    color: "#BDBDBD",
  },

  boxInputComment: {
    position: "relative",
    width: "100%",
    height: 52,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 25,
  },
  textInput: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  sendCommentIcon: {
    position: "absolute",
    top: 7,
    right: 8,
  },
});

export default styles;
