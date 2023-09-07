import { useState } from "react";
// import { useDispatch } from "react-redux";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./FormLogin-styled";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [focusedField, setFocusedField] = useState(null);
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const onFocusInput = (fieldName) => {
    setFocusedField(fieldName);
  };

  const onBlurInput = () => {
    setFocusedField(null);
  };

  const onLogin = () => {
    navigation.navigate("Publications");
    const loginUser = {
      email,
      password,
    };
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
          keyboardVerticalOffset={-130}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Увійти</Text>

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
            </View>

            <TouchableOpacity style={styles.buttonLogin} onPress={onLogin}>
              <Text style={styles.buttonLoginText}>Увійти</Text>
            </TouchableOpacity>

            <Pressable>
              <Text
                style={styles.textToReg}
                onPress={() => navigation.navigate("Registration")}
              >
                Немає акаунту? Зареєструватися
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default FormLogin;
