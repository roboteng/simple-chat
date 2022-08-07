import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [prevMessages, setPrevMessage] = useState<string[]>([]);
  const clearMessage = () => {
    setPrevMessage([...prevMessages, message]);
    setMessage("")
  };
  const saveMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  useEffect(() => {
    axios.get("http://localhost:45678/api/messages").then(res => console.log(res.data))
  })

  return (
    <div className="App">
      <MessageInput saveMessage={saveMessage} message={message} clearMessage={clearMessage} />
      <MessageDisplay prevMessages={prevMessages} />
    </div>
  );
}

function MessageInput({ saveMessage, message, clearMessage }: {
  saveMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  message: string,
  clearMessage: () => void,
}) {
  return <>
    <textarea onChange={saveMessage} value={message} />
    <button onClick={clearMessage}>Send</button>
  </>;
}

function MessageDisplay({ prevMessages }: {
  prevMessages: string[]
}) {
  return <>
    <ul>
      {prevMessages.map((m, i) => <li key={i.toString()}>{m}</li>)}
    </ul>
  </>;
}

export default App;
