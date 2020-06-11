import React from "react";
import { View, Text } from "react-native";
import style from "../style";

export const FormLabel = ({ children, label }) => (
  <View>
    <Text style={{ ...style.basetext, ...style.fieldTitle }}>{label}</Text>
    {children}
  </View>
);
