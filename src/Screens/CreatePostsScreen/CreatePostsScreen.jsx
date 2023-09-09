import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreen-styled";
import TrashIcon from "../../img/icons/trash";
import CameraIcon from "../../img/icons/camera";

function CreatePostsScreen() {
  const [namePost, setNamePost] = useState("");
  const [location, setLocation] = useState("");
  const [onPublish, setOnPublish] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [btnDdisabled, setBtnDdisabled] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCameraRef}>
        <View style={styles.photoView}>
          {/* <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      <Pressable style={styles.createImage}>
        <View style={styles.cameraIcon}>
          <CameraIcon />
        </View>
      </Pressable>
      <Text style={styles.textUnderImg}>Завантажте фото</Text>
      <View>
        <TextInput
          value={namePost}
          style={styles.inputNamePost}
          placeholderTextColor={"#BDBDBD"}
          placeholder="Назва..."
          onChangeText={setNamePost}
        />
      </View>
      <View style={styles.boxLocation}>
        <AntDesign
          style={styles.iconLocation}
          name="enviromento"
          size={22}
          color="grey"
        />
        <TextInput
          value={location}
          style={styles.inputLocation}
          placeholder="Місцевість..."
          placeholderTextColor={"#BDBDBD"}
          onChangeText={setLocation}
        />
      </View>
      <Pressable>
        <Text style={styles.btnAddPost}>Опублікувати</Text>
      </Pressable>
      <Pressable
        style={
          btnDdisabled
            ? styles.delPost
            : { ...styles.delPost, backgroundColor: "#FF6C00" }
        }
      >
        <TrashIcon stroke={btnDdisabled ? "#bdbdbd" : "#fff"} />
      </Pressable>
    </View>
  );
}

export default CreatePostsScreen;
