import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";


const MessagesList = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get("/api/messages");
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">User Messages</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg._id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{msg.name}</h2>
            <p className="text-gray-400">{msg.email}</p>
            <p className="mt-2">{msg.message}</p>
            <button className="bg-red-500 text-white mt-4 px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
