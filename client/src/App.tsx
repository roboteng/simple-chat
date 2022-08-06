import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const clearMessage = () => setMessage("");

  return (
    <div className="App">
      <textarea onChange={(e) => setMessage(e.target.value)} value={message} />
      <button onClick={clearMessage}>Send</button>
    </div>
  );
}

export default App;
