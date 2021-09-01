import { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import "./WebSocket.css";

const WebSocket = (props) => {
  const [ws, setWs] = useState(null);

  const connectWebSocket = () => {
    setWs(webSocket("http://localhost:3000"));
    ws.emit("test", props.url);
  };

  useEffect(() => {
    if (ws) {
      console.log("success connect...");
      initWebSocket();
    }
  }, [ws]);

  const initWebSocket = () => {
    ws.on("test", message => {
      console.log(message);
    });
  };

  //   const sendMessage = () => {
  //     ws.emit("test", props.url);
  //   };

  return (
    <div>
        <button className="GenerateButton" onClick={connectWebSocket}>Generate</button>
    </div>
  );
};

export default WebSocket;
