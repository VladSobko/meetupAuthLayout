import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import style from "./style";

export default function LoginScreen({ navigation }) {
  const [phoneNumber, onChangePhoneNumber] = React.useState("");
  const [pin, onChangePin] = React.useState("");

  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.container}>
        <View>
          <Text style={style.titlePage}>Hello!</Text>
          <Text style={style.basetext}>
            please enter your details to sign in
          </Text>
        </View>
        <View>
          <Text style={style.basetext}>Phone Number</Text>
          <TextInput
            style={style.inputField}
            onChangeText={text => onChangePhoneNumber(text)}
            value={phoneNumber}
          />
          <Text style={style.basetext}>Pin</Text>
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
              style={style.gradientButton}
            >
              <Text style={style.gradientButtonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text>
            Don’t have an account?{" "}
            <Text
              style={style.navLink}
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
