import React from "react";
import { View, Image } from "react-native";
import style from "../style";

export function Header() {
  return (
    <View style={style.logoShapeContainer}>
      <Image style={style.logo} source={require("../assets/Logo.png")} />
      <Image
        style={style.shape}
        source={require("../assets/AbstractShape.png")}
      />
    </View>
  );
}
