import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  userInfo: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    color: "#212121CC",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  posts: {
    width: "100%",
  },
  postItem: {
    width: "100%",
    marginBottom: 32,
  },
  postImg: {
    width: "auto",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  postName: {
    width: "100%",
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 8,
  },
  postInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postInfoLeftSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  messageCount: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  postInfoRithSite: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  mapLink: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
});

export default styles;
