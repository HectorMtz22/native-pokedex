import { LoginFormFields } from "../models/Login";
import { user, userDetails } from "../utils/userDB";

export default async function getUser(props: LoginFormFields) {
  if (props.username !== user.username || props.password !== user.password) {
    throw new Error("Required");
  } else return userDetails;
}
