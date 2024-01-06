import { useState, useLayoutEffect } from "react";
import chatStore from "./Store/chat";

const SecondPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const messageObject = {
      person: "second-person",
      text: e.target.elements.messageInput.value.trim(),
    };

    chatStore.sendMessage(messageObject);
    document.getElementById("messageForm").reset();
  };
  console.log(chatState);
  return (
    <div className="container">
      <h2 style={{ float: "right" }}>Second Person</h2>
      <div className="chat-box">
        {chatState.data.map((message, index) => (
          <div key={index}>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <input type="text" id="messageInput" name="messageInput" required />
        <button type="submit">Send</button> <br />
      </form>
      <button className="clear-button" onClick={() => chatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  );
};

export default SecondPerson;
