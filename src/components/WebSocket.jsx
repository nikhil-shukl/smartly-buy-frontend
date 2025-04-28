// src/components/WebSocket.jsx

import React, { useEffect } from 'react';
import { createWebSocket } from '../services/webSocketService';  // Adjust the path based on your folder structure

const YourComponent = () => {
  useEffect(() => {
    const token = getTokenFromSomewhere();  // Retrieve token (e.g., from context or localStorage)

    // Create the WebSocket connection
    const socket = createWebSocket(token);

    // You can handle additional WebSocket events or state updates here

    // Cleanup WebSocket on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Example</h1>
    </div>
  );
};

export default WebSocket;
