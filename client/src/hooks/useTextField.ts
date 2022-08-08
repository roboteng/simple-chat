import { useState } from "react";

export function useTextField() {
  const [value, setValue] = useState("");
  function readValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  return [value, readValue, setValue] as const;
}
