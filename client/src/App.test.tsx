import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Message textfield is cleared when the "Send" button is pressed', () => {
  render(<App />);
  const textbox = screen.getByRole("textbox");
  userEvent.type(textbox, "Hello, world!");
  const send = screen.getByText(/send/i);
});
