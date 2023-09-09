import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import registerDB from "../../redux/auth/authOperations";
import PlusCircle from "../../img/svg/plus-circle";
import AddIcon from "../../img/icons/add";
import styles from "./FormUserReg-styled";

const FormUserReg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [focusedField, setFocusedField] = useState(null);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onFocusInput = (fieldName) => {
    setFocusedField(fieldName);
  };

  const onBlurInput = () => {
    setFocusedField(null);
  };

  const onRegistration = () => {
    navigation.navigate("Home");
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(registerDB(newUser));
  };

  const toglleShowPass = () => setShowPass((showPass) => !showPass);

  return (
    <ImageBackground
      source={require("../../img/photo-bg.png")}
      style={{ height: "100%" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="height"
          style={{ flex: 1, justifyContent: "flex-end" }}
          keyboardVerticalOffset={-160}
        >
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("../../img/default-avatar.png")}
                style={styles.avatarImg}
              />
              {/* <Pressable style={styles.iconAddPhoto}>
                <AddIcon />
              </Pressable> */}
              <Image
                source={require("../../img/icons/add-photo.png")}
                style={styles.iconAddPhoto}
              />
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <View>
              <TextInput
                value={name}
                placeholder="Username"
                autoComplete="username"
                style={[
                  styles.input,
                  focusedField === "username" && styles.focusedInput,
                ]}
                onChangeText={setName}
                onFocus={() => onFocusInput("username")}
                onBlur={onBlurInput}
              />
            </View>
            <View>
              <TextInput
                value={email}
                placeholder="example@mail.com"
                autoComplete="email"
                style={[
                  styles.input,
                  focusedField === "email" && styles.focusedInput,
                ]}
                onChangeText={setEmail}
                keyboardType="email-address"
                onFocus={() => onFocusInput("email")}
                onBlur={onBlurInput}
              />
            </View>

            <View style={styles.passInputContainer}>
              <TextInput
                value={password}
                secureTextEntry={showPass}
                placeholder="Input your password"
                autoComplete="password"
                style={[
                  styles.inputLastChild,
                  focusedField === "password" && styles.focusedInput,
                ]}
                onChangeText={setPassword}
                onFocus={() => onFocusInput("password")}
                onBlur={onBlurInput}
              />
              <Pressable style={styles.btnShowPass} onPress={toglleShowPass}>
                <Text style={styles.btnShowPassText}>
                  {showPass ? "Показати" : "Приховати"}
                </Text>
              </Pressable>
              <TouchableOpacity
                style={styles.buttonReg}
                onPress={onRegistration}
              >
                <Text style={styles.buttonRegText}>Зареєстуватися</Text>
              </TouchableOpacity>
            </View>

            <Pressable>
              <Text
                style={styles.textToLogin}
                onPress={() => navigation.navigate("Login")}
              >
                Вже є акаунт? Увійти
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default FormUserReg;
