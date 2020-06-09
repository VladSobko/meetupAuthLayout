import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  CheckBox
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "../style";

export function SignUpForm() {
  const [fullName, onChangeFullName] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [pin, onChangePin] = useState("");
  const [pinRepeat, onChangePinRepeat] = useState("");
  const [isCheckBoxSelected, setCheckBoxSelection] = useState(false);

  return (
    <View style={style.signUpForm}>
      <Text style={{ ...style.basetext, ...style.fieldTitle }}>Full Names</Text>

      <TextInput
        style={style.inputField}
        onChangeText={text => onChangeFullName(text)}
        value={fullName}
      />
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
        typePassword={true}
        autoCapitalize="none"
        value={pin}
        secureTextEntry={true}
      />
      <Text style={{ ...style.basetext, ...style.fieldTitle }}>Repeat Pin</Text>
      <TextInput
        style={style.inputField}
        onChangeText={text => onChangePinRepeat(text)}
        typePassword={true}
        autoCapitalize="none"
        value={pinRepeat}
        secureTextEntry={true}
      />

      <View style={style.checkboxContainer}>
        <CheckBox
          value={isCheckBoxSelected}
          onValueChange={setCheckBoxSelection}
          style={style.checkbox}
        />
        <Text style={{ ...style.basetext, ...style.checkboxText }}>
          I agree to the terms & conditions
        </Text>
      </View>

      <TouchableOpacity>
        <LinearGradient
          colors={["#E73361", "#9A1675"]}
          style={{ ...style.gradientButton, ...style.authButton }}
          start={[0, 1]}
          end={[1, 0]}
        >
          <Text style={style.gradientButtonText}>Register</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
