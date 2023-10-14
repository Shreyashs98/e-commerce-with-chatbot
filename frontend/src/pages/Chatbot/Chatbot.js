import React, { useState } from "react";
import "./Chatbot.css"; // Import the external CSS file
import NavBar from "../../features/navbar/Navbar";

function Chatbot() {
  const [userQuery, setUserQuery] = useState(""); // State to store the user's query
  const [chatbotResponse, setChatbotResponse] = useState(""); // State to store the chatbot's response

  const handleUserQueryChange = (e) => {
    setUserQuery(e.target.value);
  };

  const handleSendMessage = () => {
    const query = userQuery.trim(); // Remove leading/trailing spaces
    if (query) {
      // If the user asked a question, respond with "Line busy"
      setChatbotResponse("Line Busy Please try later");
    }
    setUserQuery(""); // Clear the user's input field
  };

  return (
    <div>
      <NavBar>
        <div className="chatbot-container">
          <div className="chatbot-card">
            <p className="chatbot-title">E-Commerce Chatbot</p>
            <div className="chatbot-message">
              {chatbotResponse && <p>{chatbotResponse}</p>}
            </div>
            <input
              type="text"
              placeholder="Type your query here..."
              value={userQuery}
              onChange={handleUserQueryChange}
            />
            <button className="chatbot-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </NavBar>
    </div>
  );
}

export default Chatbot;
