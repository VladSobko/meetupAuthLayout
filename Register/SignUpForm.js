import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  CheckBox,
  Image,
  ImageBackground
} from "react-native";
import style from "../style";

export function SignUpForm() {
  const [fullName, onChangeFullName] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [pin, onChangePin] = useState("");
  const [pinRepeat, onChangePinRepeat] = useState("");
  const [isCheckBoxSelected, setCheckBoxSelection] = useState(false);
  const [hidePin, onChangeHidePin] = useState(true);
  const [hidePinRepeat, onChangeHidePinRepeat] = useState(true);

  const managePinVisibility = () => {
    hidePin ? onChangeHidePin(false) : onChangeHidePin(true);
  };
  const manageRepeatPinVisibility = () => {
    hidePinRepeat ? onChangeHidePinRepeat(false) : onChangeHidePinRepeat(true);
  };

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
        secureTextEntry={hidePin}
      />
      <TouchableOpacity
        style={{
          ...style.visibilityHidePinLogin,
          ...style.visibilityHidePinRegister
        }}
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
      <Text style={{ ...style.basetext, ...style.fieldTitle }}>Repeat Pin</Text>
      <TextInput
        style={style.inputField}
        onChangeText={text => onChangePinRepeat(text)}
        typePassword={true}
        autoCapitalize="none"
        value={pinRepeat}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          ...style.visibilityHidePinLogin,
          ...style.visibilityHidePinRepeatRegister
        }}
        onPress={manageRepeatPinVisibility}
      >
        <Image
          source={
            hidePinRepeat
              ? require("../assets/show-password.png")
              : require("../assets/hide-password.png")
          }
        />
      </TouchableOpacity>

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
      <ImageBackground
          source={require("../assets/Rectangle.png")}
          style={{ ...style.gradientButton, ...style.authButton }}
        >
          <Text style={style.gradientButtonText}>Register</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
