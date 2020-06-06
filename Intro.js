import React from "react";
import { Text, View, TouchableOpacity, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import style from "./style";


export default function IntroScreen({ navigation }) {
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
        <Image style={style.image} source={require("./assets/OnboardingImg.png")} />

        <View>
        <Text style={style.basetext}>
          Connect with your business partners and associates using the new
          platform
        </Text>
        
        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
          <LinearGradient
            colors={["#E73361", "#9A1675"]}
            style={style.gradientButton}
          >
            <Text
              style={style.gradientButtonText}
            >
              Skip Introduction
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
        <Text style={style.copyright}>copyright © meetup.</Text>
      </View>
    );
  }
}
