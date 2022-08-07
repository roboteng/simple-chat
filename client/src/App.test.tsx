import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { InMemory } from './services/MessageService';

test('Message textfield is cleared when the "Send" button is pressed', () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  expect(textbox).toHaveValue("");
});

test("Message is saved while typing", () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  expect(textbox).toHaveValue("Hello, world!");
});

test("The sent message should still be visible on screen", () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  expect(screen.getByText(/Hello, world!/)).toBeInTheDocument();
})

test("All previous sent message should still be visible on screen", () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  userEvent.type(textbox, "Its me");
  userEvent.click(send);
  expect(screen.getByText(/Hello, world!/)).toBeInTheDocument();
})

test("The username should get sent whan a message is sent", async () => {
  render(<App messageService={new InMemory()} />);
})