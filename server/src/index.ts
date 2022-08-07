import { createApp } from "./app";

const port = 45678;

const app = createApp();

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`)
})
