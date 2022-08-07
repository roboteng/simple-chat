import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { InMemory } from './services/MessageService';

test('Message textfield is cleared when the "Send" button is pressed', async () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  await waitFor(() => {
    expect(textbox).toHaveValue("");
  })
});

test("Message is saved while typing", async () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  await waitFor(() => {
    expect(textbox).toHaveValue("Hello, world!");
  })
});

test("The sent message should still be visible on screen", async () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  await waitFor(() => {
    expect(screen.getByText(/Hello, world!/)).toBeInTheDocument();
  })
})

test("All previous sent message should still be visible on screen", async () => {
  render(<App messageService={new InMemory()} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  userEvent.type(textbox, "Its me");
  userEvent.click(send);
  await waitFor(() => {
    expect(screen.getByText(/Hello, world!/)).toBeInTheDocument();
  })
})
