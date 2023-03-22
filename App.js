import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <View style={styles.container}>
      <Text>Wellcome Serhii Nazarov</Text>
      <TextInput
        placeholder="Type text"
        value={value}
        onChangeText={inputHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF00",
    alignItems: "center",
    justifyContent: "center",
  },
});
