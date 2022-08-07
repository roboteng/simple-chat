import express from "express";

export function createApp(): express.Express {
  const app = express();

  app.get("/api/messages", (req, res) => {
    res.json([]);
  });
  return app;
}