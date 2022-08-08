import { useEffect, useState } from "react";
import { useTextField } from "../hooks/useTextField";
import { LoginService } from "../services/LoginService";

export function Login({ service }: { service: LoginService }) {
  const [user, readUser] = useTextField();
  const [password, readPassword] = useTextField();

  const [isValid, setValid] = useState<boolean | undefined>(undefined)
  useEffect(() => {
    service.isValid("", "")
      .then(setValid)
  }, [service])

  return <>
    <label>
      Username
      <input onChange={readUser} value={user} />
    </label>
    <label>
      Password
      <input type="passsword" onChange={readPassword} value={password} />
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