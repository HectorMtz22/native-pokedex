import { Control, FieldError, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface LoginInputText extends TextInputProps {
  control: any;
  name: string;
  errors: FieldError | undefined;
  placeholder?: string;
}

export type LoginFormFields = {
  username: string;
  password: string;
};
