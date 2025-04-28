// src/services/webSocketService.js

export const createWebSocket = (token) => {
    const port = process.env.PORT || 5000;  // Use correct port
    const wsUrl = `ws://localhost:${port}/?token=${token}`;
  
    const socket = new WebSocket(wsUrl);
  
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
  