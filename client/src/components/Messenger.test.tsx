import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Messenger from './Messenger';
import userEvent from '@testing-library/user-event';
import { InMemory } from '../services/MessageService';

// Ideally, these tests would be changed so that we weren't testing the functionality of the service.
// The tests were written before the service was created, so now they are testing both the service, and the UI

test('Message textfield is cleared when the "Send" button is pressed', async () => {
  render(<Messenger messageService={new InMemory()} user={{ name: "" }} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  await waitFor(() => {
    expect(textbox).toHaveValue("");
  })
});

test("Message is saved while typing", async () => {
  render(<Messenger messageService={new InMemory()} user={{ name: "" }} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  await waitFor(() => {
    expect(textbox).toHaveValue("Hello, world!");
  })
});

test("The sent message should still be visible on screen", async () => {
  render(<Messenger messageService={new InMemory()} user={{ name: "" }} />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
  userEvent.click(send);
  await waitFor(() => {
    expect(screen.getByText(/Hello, world!/)).toBeInTheDocument();
  })
})

test("All previous sent message should still be visible on screen", async () => {
  render(<Messenger messageService={new InMemory()} user={{ name: "" }} />);
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
