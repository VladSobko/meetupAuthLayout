import React from "react";
import { Image } from "react-native";

export function IconEye({ hidePin }) {
  return (
    <Image
      source={
        hidePin
          ? require("./assets/show-password.png")
          : require("./assets/hide-password.png")
      }
    />
  );
}
