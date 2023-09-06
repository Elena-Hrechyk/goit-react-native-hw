import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
    height: 549,
    display: "flex",
    // flex: 1,

    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: -60,
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  iconAddPhoto: {
    position: "absolute",
    width: 30,
    height: 30,
    bottom: 20,
    right: -15,
  },
  title: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  input: {
    width: 343,
    height: 50,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontSize: 16,
  },
  inputLastChild: {
    width: 343,
    height: 50,
    marginBottom: 43,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00", // Колір рамки при фокусі
  },
  passInputContainer: {
    position: "relative",
  },

  btnShowPass: {
    position: "absolute",
    top: 15,
    right: 16,
    backgroundColor: "transporant",
  },
  btnShowPassText: {
    color: "#1B4371",
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  buttonReg: {
    height: 51,
    width: 343,
    display: "flex",
    alignItems: "center",
    marginBottom: 32,
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: "#fff",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  buttonRegText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  textToLogin: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});

export default styles;
