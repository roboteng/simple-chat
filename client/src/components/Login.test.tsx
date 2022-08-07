import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { LoginService } from "../services/LoginService";
import { Login } from "./Login"

test("When wrong credentials are given, there is a 'Could not login' message", async () => {
  const service: LoginService = {
    isValid() {
      return Promise.resolve(false);
    }
  }
  render(<Login service={service} />);

  const userField = screen.getByLabelText(/user/i);
  userEvent.type(userField, "Sam");

  const passwordField = screen.getByLabelText(/password/i);
  userEvent.type(passwordField, "password1234");

  const loginButton = screen.getByRole("button");
  userEvent.click(loginButton);

  await waitFor(() => {
    expect(screen.getByText(/Could not sign in/i)).toBeInTheDocument();
  })
})

test("When correct credentials are given, there is no message", async () => {
  const service: LoginService = {
    isValid() {
      return Promise.resolve(true);
    }
  }
  render(<Login service={service} />);

  const userField = screen.getByLabelText(/user/i);
  userEvent.type(userField, "Sam");

  const passwordField = screen.getByLabelText(/password/i);
  userEvent.type(passwordField, "password1234");

  const loginButton = screen.getByRole("button");
  userEvent.click(loginButton);
  await waitFor(() => {
    expect(screen.queryByText(/Could not sign in/i)).not.toBeInTheDocument();
  })
})