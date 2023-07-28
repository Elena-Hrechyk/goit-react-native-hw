import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 110,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 238,
    width: 343,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  textUnderImg: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 32,
    textAlign: "left",
  },
  inputNamePost: {
    width: 343,
    height: 50,
    marginBottom: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",

    fontSize: 16,
  },
  boxLocation: {
    position: "relative",
  },
  iconLocation: {
    position: "absolute",
    top: 13,
    color: "#E8E8E8",
  },
  inputLocation: {
    width: 343,
    height: 50,
    marginBottom: 32,
    paddingVertical: 16,
    paddingLeft: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    backgroundColor: "transporant",
    fontSize: 16,
  },
  btnAddPost: {
    width: 343,
    height: 51,
    fontFamily: "Roboto-Regular",
  },
});
