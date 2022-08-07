import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [prevMessage, setPrevMessage] = useState<string[]>([]);
  const clearMessage = () => {
    setPrevMessage([...prevMessage, message]);
    setMessage("")
  };
  const saveMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  return (
    <div className="App">
      <textarea onChange={saveMessage} value={message} />
      <button onClick={clearMessage}>Send</button>
      <div>
        <ul>
          {prevMessage.map(m => <li>{m}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
