import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from "react-native";
import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [value, setValue] = useState(initialState);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setValue(initialState);
    console.log(value);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image style={styles.avatar}></Image>
        <View style={styles.form}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            value={value.login}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setValue((prevState) => ({ ...prevState, login: value }))
            }
            style={styles.input}
          />
          <TextInput
            placeholder="Адраса електронної пошти"
            value={value.email}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setValue((prevState) => ({ ...prevState, email: value }))
            }
            style={styles.input}
          />
          <TextInput
            placeholder="Пароль"
            value={value.password}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setValue((prevState) => ({ ...prevState, password: value }))
            }
            style={styles.input}
            secureTextEntry={true}
          />
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={keyboardHide}
            >
              <Text style={styles.textBtn}>Зареєструватися</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={keyboardHide}>
              <Text style={styles.accounttxt}>Вже маєте акаунт? Ввійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  form: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    paddingHorizontal: 16,
    // marginBottom: 20,
  },
  title: {
    fontFamily: "Roboto-Medium",
    marginTop: 92,
    marginBottom: 16,
    color: "#212121",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",

    fontSize: 16,
    lineHeight: 19,
    height: 50,
    width: "100%",
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  button: {
    width: 343,
    height: 50,
    marginTop: 60,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 22,

    borderRadius: 100,
  },
  textBtn: {
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  avatar: {
    position: "absolute",
    zIndex: 3,
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  accounttxt: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
    marginBottom: 78,
  },
});
