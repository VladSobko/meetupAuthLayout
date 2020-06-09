import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "../style";

export function SignInForm({ navigation }) {
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [pin, onChangePin] = useState("");
  //const [pinVisible, onChangePinVisible] = useState("");
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
      <Text style={{ ...style.basetext, ...style.fieldTitle }}>Pin</Text>
      <TextInput
        style={style.inputField}
        onChangeText={text => onChangePin(text)}
        value={pin}
        secureTextEntry={true}
      />

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
