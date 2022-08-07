import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [prevMessages, setPrevMessage] = useState<string[]>([]);
  const clearMessage = () => {
    setPrevMessage([...prevMessages, message]);
    setMessage("")
  };
  const saveMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

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
  </>
}

function MessageDisplay({ prevMessages }: {
  prevMessages: string[]
}) {
  return <>
    <div>
      <ul>
        {prevMessages.map(m => <li>{m}</li>)}
      </ul>
    </div></>
}

export default App;
