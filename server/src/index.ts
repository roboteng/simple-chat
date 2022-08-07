import express from "express";

const port = 45678;

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`)
})