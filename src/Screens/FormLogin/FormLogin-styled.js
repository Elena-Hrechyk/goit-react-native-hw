import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",

    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 132,
    paddingHorizontal: 16,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  },
  btnShowPassText: {
    color: "#1B4371",
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  buttonLogin: {
    height: 51,
    width: 343,
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: "#fff",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  buttonLoginText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  textToReg: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});

export default styles;
