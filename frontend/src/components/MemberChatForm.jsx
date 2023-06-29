/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

function MemberChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue !== "") {
      const newMessage = {
        id: messages.length + 1,
        content: inputValue,
        sender: "Member",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div className="dialogue-space">
      <div className="dialogue-border">
        {messages.map((message) => (
          <div key={message.id} className="dialogue-message">
            <span className="dialogue-sender">{message.sender}: </span>
            {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          className="dialogue-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit" onClick={handleSendMessage}>
          {" "}
          Envoyer{" "}
        </button>
      </div>
    </div>
  );
}

export default MemberChat;
