import React, { useState } from "react";
import "./Chatbot.css"; // Import the external CSS file
import NavBar from "../../features/navbar/Navbar";

function Chatbot() {
  const [userQuery, setUserQuery] = useState(""); // State to store the user's query
  const [chatbotResponses, setChatbotResponses] = useState([]); // State to store chatbot responses

  const handleUserQueryChange = (e) => {
    setUserQuery(e.target.value);
  };

  const handleSendMessage = () => {
    const query = userQuery.trim(); // Remove leading/trailing spaces
    if (query) {
      const newResponses = [...chatbotResponses];
      newResponses.push({ type: "user", text: query });

      // Dummy chatbot responses based on user input
      let botResponse = "";
      if (query.toLowerCase().includes("hello")) {
        botResponse = "Hello there! How can I assist you?";
      } else if (query.toLowerCase().includes("product")) {
        botResponse =
          "We have a wide range of products. What are you looking for?";
      } else {
        botResponse = "Line Busy Please Try Later";
      }

      newResponses.push({ type: "bot", text: botResponse });

      setChatbotResponses(newResponses);
    }
    setUserQuery(""); // Clear the user's input field
  };

  return (
    <div>
      <NavBar>
        <div className="chatbot-container">
          <div className="chatbot-card">
            <p className="chatbot-title">Chatbot</p>
            <div className="chatbot-messages">
              {chatbotResponses.map((response, index) => (
                <div key={index} className={`chatbot-${response.type}`}>
                  {response.text}
                </div>
              ))}
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
