// src/services/webSocketService.js

export const createWebSocket = (token) => {
  const wsUrl = import.meta.env.VITE_WS_URL || `ws://localhost:5000`; // Use the environment variable

  const socket = new WebSocket(`${wsUrl}/?token=${token}`); // Dynamically set WebSocket URL based on env

  socket.onopen = () => {
    console.log('WebSocket connected');
  };

  socket.onmessage = (message) => {
    console.log('Message from server:', message.data);
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket closed');
  };

  return socket;
};

  