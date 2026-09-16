import React, { useState, useLayoutEffect } from "react";
import chatStore from "./Store/chat";

const FirstPerson = () => {
  // External store subscription pattern: local React state mirrors the RxJS chat store.
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    // Synchronous subscription pattern: useLayoutEffect updates before the browser paints.
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    // Event adapter pattern: translate form input into a message object for the store.
    const messageObject = {
      person: "first-person",
      text: e.target.elements.messageInput.value.trim(),
    };
    chatStore.sendMessage(messageObject);
    document.getElementById("messageForm").reset();
  };

  return (
    <div className="container">
      <h2>First Person</h2>
      <div className="chat-box">
        {chatState.data.map((message, index) => (
          <div key={index}>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <input
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button> <br />
      </form>
      <button className="clear-button" onClick={() => chatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  );
};
export default FirstPerson;
