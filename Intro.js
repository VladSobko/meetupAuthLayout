import React from "react";
import { Text, View, Image } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import style from "./style";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { GradientButton } from "./Components/GradientButton";

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
          <View style={style.introButton}>
            <GradientButton
              onPress={() => {
                navigation.navigate("Login");
              }}
              title="Skip Introduction"
              source={require("./assets/Rectangle.png")}
            />
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}
