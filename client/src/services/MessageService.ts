import axios from "axios";

export interface MessageService {
  postMessage(message: { user: string, body: string }): Promise<void>;
  getMessages(): Promise<{ user: string, body: string }[]>;
}

export class InMemory implements MessageService {
  private messages: { user: string, body: string }[]
  constructor() {
    this.messages = [];
  }
  postMessage(message: { user: string; body: string; }): Promise<void> {
    this.messages = [...this.messages, message]
    return Promise.resolve();
  }
  getMessages(): Promise<{ user: string; body: string; }[]> {
    return Promise.resolve(this.messages);
  }
}

export class ExternalHTTP implements MessageService {
  async postMessage(message: { user: string; body: string; }): Promise<void> {
    await axios.post("http://localhost:45678/api/messages", message)
  }
  async getMessages(): Promise<{ user: string; body: string; }[]> {
    const res = await axios.get("http://localhost:45678/api/messages")
    return res.data;
  }
}

