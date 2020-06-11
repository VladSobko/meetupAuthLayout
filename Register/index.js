import React from "react";
import { Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import style from "../style";
import { Header } from "../Components/Header";
import { SignUpForm } from "./SignUpForm";

export default function RegisterScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.container}>
        <Header />
        <Text
          style={{ ...style.titlePage, ...style.fieldTitle, ...style.intro }}
        >
          Register
        </Text>

        <SignUpForm />

        <Text style={style.copyright}>
          Already have an account?{" "}
          <Text
            style={{ ...style.navLink, ...style.navLinkReg }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Sign In
          </Text>
        </Text>
      </View>
    );
  }
}
