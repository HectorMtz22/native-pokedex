import { FieldError } from "react-hook-form";
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

export type LoginData = {
  username: string;
  firstname: string;
  lastName: string;
  email: string;
};

export interface RegisterData extends LoginData {
  password: string;
  confirm?: string;
}
