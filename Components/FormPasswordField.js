import React from "react";
import { TextInput } from "react-native";
import { FormLabel } from "./FormLabel";
import style from "../style";

export const FormPasswordField = ({
  children,
  value,
  onChange,
  secureTextEntry,
  typePassword,
  autoCapitalize,
  ...props
}) => (
  <FormLabel {...props}>
    <TextInput
      style={style.inputField}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      typePassword={true}
      autoCapitalize="none"
    />
  </FormLabel>
);
