import { useState } from "react";
import { Login } from "./components/Login";
import Messenger from "./components/Messenger";
import { User } from "./models/models";
import { LoginService } from "./services/LoginService";
import { ExternalHTTP } from "./services/MessageService";

export function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const loginService: LoginService = {
    isValid(name: string, password: string) {
      const valid = name === password;
      if (valid) {
        setUser({ name });
      }
      return Promise.resolve(valid);
    }
  }
  return user
    ? <Messenger messageService={new ExternalHTTP()} user={user} />
    : <Login service={loginService} />
}