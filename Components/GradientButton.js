import React from "react";
import { Text, TouchableOpacity, ImageBackground } from "react-native";
import style from "../style";

export const GradientButton = ({ onPress, title, source }) => (
  <TouchableOpacity onPress={onPress}>
    <ImageBackground source={source} style={style.gradientButton }>
      <Text style={style.gradientButtonText}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);
