import React from "react";
import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import style from "./style";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export default function IntroScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.container}>
        <Header />
        <Image
          style={style.image}
          source={require("./assets/OnboardingImg.png")}
        />

        <View>
          <Text style={{ ...style.basetext, ...style.introText }}>
            Connect with your business partners and associates using the new
            platform
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <ImageBackground
              source={require("./assets/Rectangle.png")}
              style={style.gradientButton}
            >
              <Text style={style.gradientButtonText}>Skip Introduction</Text>
            </ImageBackground>
          </TouchableOpacity>

          
        </View>
        <Footer />
      </View>
    );
  }
}
