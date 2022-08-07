import React, { useEffect, useState } from 'react';
import './App.css';
import { MessageService } from './messageService/MessageService';

type Message = {
  user: string,
  body: string,
}

function App(props: { messageService: MessageService }) {
  const [message, setMessage] = useState("");
  const [prevMessages, setPrevMessage] = useState<Message[]>([]);
  const clearMessage = () => {
    setPrevMessage([...prevMessages, { user: "Me", body: message }]);
    setMessage("");
    props.messageService.postMessage({ body: message, user: "Sam" })
  };
  const saveMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  useEffect(() => {
    props.messageService.getMessages()
      .then(data => setPrevMessage(data))
  }, [props.messageService])

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
  prevMessages: Message[]
}) {
  return <>
    <ul>
      {prevMessages.map((m, i) => <li key={i.toString()}>
        {m.user} - {m.body}
      </li>)}
    </ul>
  </>;
}

export default App;
