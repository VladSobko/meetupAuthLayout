import React from "react";
import { View, Text } from "react-native";
import style from "../style";

export function Introduction() {
  return (
    <View>
      <Text style={{ ...style.titlePage, ...style.fieldTitle, ...style.intro }}>
        Hello!
      </Text>
      <Text
        style={{
          ...style.basetext,
          ...style.fieldTitle,
          ...style.loginIntroText
        }}
      >
        please enter your details to sign in
      </Text>
    </View>
  );
}
