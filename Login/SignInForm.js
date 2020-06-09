import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "../style";

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
      <Text style={{ ...style.basetext, ...style.fieldTitle }}>
        Phone Number
      </Text>
      <TextInput
        style={style.inputField}
        onChangeText={text => onChangePhoneNumber(text)}
        value={phoneNumber}
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
        <Image
          source={
            hidePin
              ? require("../assets/show-password.png")
              : require("../assets/hide-password.png")
          }
        />
      </TouchableOpacity>

      <Text style={style.navLink}>forgot your pin?</Text>

      <TouchableOpacity>
        <LinearGradient
          colors={["#E73361", "#9A1675"]}
          style={{ ...style.gradientButton, ...style.authButton }}
          start={[0, 1]}
          end={[1, 0]}
        >
          <Text style={style.gradientButtonText}>Sign In</Text>
        </LinearGradient>
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
