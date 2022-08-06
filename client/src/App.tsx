import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  return (
    <div className="App">
      <textarea value={message} />
      <button onClick={() => setMessage("")}>Send</button>
    </div>
  );
}

export default App;
