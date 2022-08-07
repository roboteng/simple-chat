import { createApp } from "./app";
import supertest from "supertest";

test("Responds with an empty list when nothing has happened yet", async () => {
  const app = createApp();
  const res = await supertest(app)
    .get("/api/messages")
    .send();
  expect(res.body).toEqual([]);
})