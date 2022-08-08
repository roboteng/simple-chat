import express, { Request } from "express";
import cors from "cors";

// If this got much bigger, I would want to separate this out in a similar fashion as the UI
// Models, buisness logic/stores, and handlers in different folder/files

type Message = { user: string, body: string }

export function createApp(): express.Express {
  const app = express();
  // I wasn't expecting this data structure to work as well as it did
  // I'm glad it was so simple
  const messages: Message[] = [];
  app.use(cors())
  app.use(express.json())
  app.get("/api/messages", (req, res) => {
    res.json(messages);
  });

  app.post("/api/messages", (req: Request<{ body: string }, { body: string }, { body: string }, { body: string }>, res) => {
    const message = req.body as Message;
    if (message) {
      messages.push(message)
    }
    res.send();
  })
  return app;
}