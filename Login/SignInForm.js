import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";
import style from "../style";
import { IconEye } from "../Components/IconEye";
import { FormField } from "../Components/FormField";

export function SignInForm({ navigation }) {
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [pin, onChangePin] = useState("");
  const [hidePin, onChangeHidePin] = useState(true);
  const [pinError, onSetPinError] = useState(true);

  managePinVisibility = () => {
    hidePin ? onChangeHidePin(false) : onChangeHidePin(true);
  };

  return (
    <View style={style.signInForm}>
      <FormField
        label="Phone Number"
        value={phoneNumber}
        onChange={text => onChangePhoneNumber(text)}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={
            pinError
              ? {
                  ...style.basetext,
                  ...style.fieldTitle,
                  ...style.invalidLabelPin
                }
              : { ...style.basetext, ...style.fieldTitle }
          }
        >
          Pin
        </Text>
        <Text
          style={[
            {
              ...style.basetext,
              ...style.fieldTitle,
              ...style.invalidLabelPin
            },
            { opacity: pinError ? 100 : 0 }
          ]}
        >
          wrong pin. Please try again
        </Text>
      </View>
      <TextInput
        style={
          pinError
            ? { ...style.inputField, ...style.invalidField }
            : style.inputField
        }
        onChangeText={text => onChangePin(text)}
        value={pin}
        secureTextEntry={hidePin}
      />

      <TouchableOpacity
        style={style.visibilityHidePinLogin}
        onPress={managePinVisibility}
      >
        <IconEye hidePin={hidePin} />
      </TouchableOpacity>

      <Text style={style.navLink}>forgot your pin?</Text>

      <TouchableOpacity>
        <ImageBackground
          source={require("../assets/Rectangle.png")}
          style={{ ...style.gradientButton, ...style.authButton }}
        >
          <Text style={style.gradientButtonText}>Sign In</Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={{ ...style.basetext, ...style.bottomText }}>
        Don’t have an account? {""}
        <Text
          style={{ ...style.basetext, ...style.navLink }}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}
