import { useState } from "react";
import { useTextField } from "../hooks/useTextField";
import { LoginService } from "../services/LoginService";

export function Login({ service }: { service: LoginService }) {
  const [user, readUser] = useTextField();
  const [password, readPassword] = useTextField();

  const [isWrong, setWrong] = useState<boolean | undefined>(undefined)
  const login = () => {
    service.isValid(user, password)
      .then(valid => setWrong(!valid))
  }

  return <>
    <label>
      Username
      <input onChange={readUser} value={user} />
    </label>
    <label>
      Password
      <input type="passsword" onChange={readPassword} value={password} />
    </label>
    <input type="button" value="Login" onClick={login} />
    {isWrong
      ? <span>
        Could not sign in
      </span>
      : null
    }
  </>;
}