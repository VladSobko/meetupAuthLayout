import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import style from "./style";

export default function LoginScreen({ navigation }) {
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [pin, onChangePin] = useState("");

  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.container}>
        <View style={style.logoShapeContainer}>
          <Image style={style.logo} source={require("./assets/Logo.png")} />
          <Image style={style.shape} source={require("./assets/AbstractShape.png")} />
        </View>

        <View >
          <Text style={{...style.titlePage, ...style.fieldTitle, ...style.intro}}>Hello!</Text>
          <Text style={{...style.basetext, ...style.fieldTitle, ...style.loginIntroText}}>
            please enter your details to sign in
          </Text>
        </View>
        <View style={style.signInForm}>
          <Text style={{...style.basetext, ...style.fieldTitle}}>Phone Number</Text>
          <TextInput
            style={style.inputField}
            onChangeText={text => onChangePhoneNumber(text)}
            value={phoneNumber}
          />
          <Text style={{...style.basetext, ...style.fieldTitle}}>Pin</Text>
          <TextInput
            style={style.inputField}
            onChangeText={text => onChangePin(text)}
            value={pin}
            secureTextEntry={true}
          />
          <Text style={style.navLink}>forgot your pin?</Text>

          <TouchableOpacity>
            <LinearGradient
              colors={["#E73361", "#9A1675"]}
              style={{...style.gradientButton, ...style.authButton}}
            >
              <Text style={style.gradientButtonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={style.basetext}>
            Don’t have an account? {""}
            <Text
              style={{...style.basetext,...style.navLink }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Sign up
            </Text>
          </Text>
        </View>
        <Text style={style.copyright}>copyright © meetup.</Text>
      </View>
    );
  }
}
