import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { styles } from "./CreatePostsScreen-styled";
import TrashIcon from "../../img/icons/trash";
import CameraIcon from "../../img/icons/camera";
import MappinIcon from "../../img/icons/mappin";

const CreatePostsScreen = () => {
  const [namePost, setNamePost] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");
  const [onPublish, setOnPublish] = useState(false);
  const [newPhotoUri, setNewPhotoUri] = useState("");
  const [btnDdisabled, setBtnDdisabled] = useState(true);
  // camera states
  const [hasPermission, setHasPermission] = useState("null");
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const dispatch = useDispatch();

  // Camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCemeraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  // Location
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //     }
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        {hasPermission === null || hasPermission === false ? (
          <Pressable style={styles.createImage}>
            <View style={styles.cameraIcon}>
              <CameraIcon />
            </View>
          </Pressable>
        ) : (
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                  }
                }}
              >
                <View style={styles.cameraIcon}>
                  <CameraIcon />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        )}

        <Text style={styles.textUnderImg}>Завантажте фото</Text>
        <View style={styles.boxNameInput}>
          <TextInput
            value={namePost}
            placeholderTextColor={"#BDBDBD"}
            style={styles.inputNamePost}
            placeholder="Назва..."
            onChangeText={setNamePost}
          />
        </View>
        <View style={styles.boxLocation}>
          <Pressable style={styles.iconLocation}>
            <MappinIcon />
          </Pressable>

          <TextInput
            value={photoLocation}
            style={styles.inputLocation}
            placeholder="Місцевість..."
            placeholderTextColor={"#BDBDBD"}
            onChangeText={setPhotoLocation}
          />
        </View>
        <Pressable>
          <Text style={styles.btnAddPost}>Опублікувати</Text>
        </Pressable>
      </View>

      <Pressable
        style={
          btnDdisabled
            ? styles.delPost
            : { ...styles.delPost, backgroundColor: "#FF6C00" }
        }
        // onPress={() => {
        //   setBtnDdisabled(true);
        //   setNamePost("");
        //   setPhotoLocation("");
        // }}
      >
        <TrashIcon stroke={btnDdisabled ? "#bdbdbd" : "#fff"} />
      </Pressable>
    </View>
  );
};

export default CreatePostsScreen;
