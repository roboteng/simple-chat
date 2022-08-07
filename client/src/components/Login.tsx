import { useEffect, useState } from "react";
import { LoginService } from "../services/LoginService";

export function Login({ service }: { service: LoginService }) {
  const [isValid, setValid] = useState<boolean | undefined>(undefined)
  useEffect(() => {
    service.isValid("", "")
      .then(setValid)
  }, [service])

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
    {isValid === undefined
      ? null
      : isValid
        ? null
        : <span>
          Could not sign in
        </span>
    }
  </>;
}