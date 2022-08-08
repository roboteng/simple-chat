import React, { useCallback, useEffect, useState } from 'react';
import '../App.css';
import { Message, User } from '../models/models';
import { MessageService } from '../services/MessageService';

function Messenger(props: { messageService: MessageService, user: User }) {
  const [message, setMessage] = useState("");
  const [prevMessages, setPrevMessage] = useState<Message[]>([]);
  const clearMessage = () => {
    setPrevMessage([...prevMessages, { user: "Me", body: message }]);
    setMessage("");
    props.messageService.postMessage({ body: message, user: props.user.name })
  };
  const saveMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  const retreiveMessages = useCallback(() => {
    props.messageService.getMessages()
      .then(setPrevMessage)
  }, [props.messageService]);

  useEffect(() => {
    const isAlive = { isAlive: true };
    const updateMessages = () => {
      if (isAlive.isAlive) {
        retreiveMessages();
        setTimeout(updateMessages, 1000);
      }
    }
    updateMessages();
    return () => {
      isAlive.isAlive = false;
    }
  }, [retreiveMessages])

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
