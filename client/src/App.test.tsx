import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Message textfield is cleared when the "Send" button is pressed', () => {
  render(<App />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  expect(textbox).toHaveValue("");
});

test("Message is saved while typing", () => {
  render(<App />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  expect(textbox).toHaveValue("Hello, world!");
});

test("The sent message should still be visible on screen", () => {
  render(<App />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
})