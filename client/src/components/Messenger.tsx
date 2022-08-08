import React, { useEffect, useState } from 'react';
import '../App.css';
import { User } from '../models/models';
import { MessageService } from '../services/MessageService';

type Message = {
  user: string,
  body: string,
}

function Messenger(props: { messageService: MessageService, user: User }) {
  const [message, setMessage] = useState("");
  const [prevMessages, setPrevMessage] = useState<Message[]>([]);
  const clearMessage = () => {
    setPrevMessage([...prevMessages, { user: "Me", body: message }]);
    setMessage("");
    props.messageService.postMessage({ body: message, user: props.user.name })
  };
  const saveMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  useEffect(() => {
    props.messageService.getMessages()
      .then(setPrevMessage)
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

export default Messenger;
