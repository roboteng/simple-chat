import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [prevMessage, setPrevMessage] = useState<string | undefined>(undefined);
  const clearMessage = () => {
    setPrevMessage(message);
    setMessage("")
  };
  const saveMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  return (
    <div className="App">
      <textarea onChange={saveMessage} value={message} />
      <button onClick={clearMessage}>Send</button>
      <div>
        <span>
          {prevMessage}
        </span>
      </div>
    </div>
  );
}

export default App;
