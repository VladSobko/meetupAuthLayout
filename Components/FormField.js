import React from "react";
import { TextInput } from "react-native";
import { FormLabel } from "./FormLabel";
import style from "../style";

export const FormField = ({ children, value, onChange, ...props }) => (
  <FormLabel {...props}>
    <TextInput style={style.inputField} value={value} onChangeText={onChange} />
  </FormLabel>
);
