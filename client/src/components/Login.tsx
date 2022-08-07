import { LoginService } from "../services/LoginService";

export function Login({ service }: { service: LoginService }) {

  return <>
    <label>
      Username
      <input />
    </label>
    <label>
      Password
      <input type="passsword" />
    </label>
    <input type="button" value="Login" />
    <span>
      Could not sign in
    </span>
  </>;
}