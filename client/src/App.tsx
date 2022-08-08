import { useState } from "react";
import { Login } from "./components/Login";
import Messenger from "./components/Messenger";
import { LoginService } from "./services/LoginService";
import { ExternalHTTP } from "./services/MessageService";

type User = {
  name: string
}

export function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const loginService: LoginService = {
    isValid(name: string) {
      setUser({ name });
      return Promise.resolve(true);
    }
  }
  console.log("user is:", (user))
  return user
    ? <Messenger messageService={new ExternalHTTP()} />
    : <Login service={loginService} />
}