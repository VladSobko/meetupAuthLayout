import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import style from "../style";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Introduction } from "./Introduction";
import { SignInForm } from "./SignInForm";

export default function LoginScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins.ttf")
  });
  3;
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.container}>
        <Header />

        <Introduction />

        <SignInForm navigation={navigation} />

        <Footer />
      </View>
    );
  }
}
