import express from "express";

export function createApp(): express.Express {
  const app = express();
  const messages: string[] = [];

  app.get("/api/messages", (req, res) => {
    res.json(messages.map(m => ({ body: m })));
  });

  app.post("/api/messages", (req, res) => {
    messages.push("Hello, world")
    res.send();
  })
  return app;
}