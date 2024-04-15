import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { Redirect, router } from "expo-router";

const index = () => {
  const [pwd, setPwd] = useState("");
  const [failed, setFailed] = useState(false);
  return (
    <View
      style={{
        height: "100%",
        padding: 50,
        display: "flex",
        gap: 10,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Login</Text>
      <Text>Enter Admin Password:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 3, borderRadius: 5 }}
        textContentType="password"
        placeholder="Password"
        onChangeText={(s) => {
          console.log("Changed");
          setPwd(s);
        }}
      />
      {failed && <Text style={{ color: "red" }}>Couldn't log in</Text>}
      <Button
        title="Login"
        onPress={() => {
          console.log("clicked");

          axios
            .post("http://192.168.1.4:8000/login", { password: pwd })
            .then(() => {
              console.log("Logged in");
              router.replace("/(home)");
            })
            .catch((e) => {
              console.log("Couldn't login");
              setFailed(true);
            });
        }}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

// "/"
