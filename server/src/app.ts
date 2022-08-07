import express, { Request } from "express";
import cors from "cors";

export function createApp(): express.Express {
  const app = express();
  const messages: string[] = [];
  app.use(cors())
  app.use(express.json())
  app.get("/api/messages", (req, res) => {
    res.json(messages.map(m => ({ body: m })));
  });

  app.post("/api/messages", (req: Request<{ body: string }, { body: string }, { body: string }, { body: string }>, res) => {
    const message = req.body.body;
    if (message) {
      messages.push(message)
    }
    res.send();
  })
  return app;
}