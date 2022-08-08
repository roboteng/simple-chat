import { useState } from "react";

// this could be abstracted a little more, rigt now it only works for text input
// In order to work for text areas, it should be generic on either:
// `HTMLInputElement` or `HTMLTextAreaElement`
export function useTextField() {
  const [value, setValue] = useState("");
  function readValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  return [value, readValue, setValue] as const;
}
