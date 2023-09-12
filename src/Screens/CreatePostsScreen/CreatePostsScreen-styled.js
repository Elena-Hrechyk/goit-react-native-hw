import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  boxTop: {
    width: "100%",
  },

  // camera
  camera: { width: "100%", height: 238, marginBottom: 8 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  button: { justifyContent: "center" },
  //

  createImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 238,
    width: "100%",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  cameraIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "#fff",
  },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },

  textUnderImg: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 32,
    textAlign: "left",
  },
  boxNameInput: {
    width: "100%",
    height: 50,
    marginBottom: 16,
  },
  inputNamePost: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
  },
  boxLocation: {
    position: "relative",
    width: "100%",
    height: 50,
    marginBottom: 32,
  },
  iconLocation: {
    position: "absolute",
    top: 12,
  },
  inputLocation: {
    paddingVertical: 16,
    paddingLeft: 26,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
  },
  btnAddPost: {
    alignSelf: "stretch",
    height: 51,
    minWidth: 343,
    display: "flex",
    alignItems: "center",
    marginBottom: 120,
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  delPost: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    marginBottom: "auto",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
});
