import React, { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import "./GenerateBar.css";
const [ws, setWs] = useState(null);

class GenerateBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      term: ""
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.generateShortUrl = this.generateShortUrl.bind(this);
  }

  connectWebSocket () {
    setWs(webSocket("http://localhost:3000"));
  }

  useEffectSocket (initWebSocket) {
    useEffect(() => {
      if (ws) {
        console.log("success connect...");
      }
      initWebSocket();
    }, [ws]);
  }

  initWebSocket () {
    ws.on("test", test => {
      console.log(test);
    });
  }

  // get input value
  handleTermChange (event) {
    this.setState({ term: event.target.value });
  }

  // call api to get short URL
  generateShortUrl () {
    const url = { url: this.state.term };
    // eslint-disable-next-line react/prop-types
    this.useEffectSocket();
    this.connectWebSocket();
    this.props.onGenerate(url);
  }

  render () {
    return (
          <div className="GenerateBar">
            <input placeholder="http://" onChange={this.handleTermChange} />
            <button className="GenerateButton" onClick={this.generateShortUrl}>Generate</button>
          </div>
    );
  }
}

export default GenerateBar;
