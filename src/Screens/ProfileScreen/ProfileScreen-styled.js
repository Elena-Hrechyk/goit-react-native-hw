import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    marginTop: 143,
    alignItems: "center",
    paddingTop: 92,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: -60,
    marginBottom: 32,
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  iconAddDelPhoto: {
    position: "absolute",
    width: 26,
    height: 26,
    bottom: 22,
    right: -8,
  },
  iconLogout: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  username: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
    letterSpacing: 0.3,
    marginBottom: 33,
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
    marginRight: 16,
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
