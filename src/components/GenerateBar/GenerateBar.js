import React from "react";
import "./GenerateBar.css";
import WebSocket from "../WebSocket/WebSocket";

class GenerateBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      term: ""
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.generateShortUrl = this.generateShortUrl.bind(this);
  }

  // get input value
  handleTermChange (event) {
    this.setState({ term: event.target.value });
  }

  // call api to get short URL
  generateShortUrl () {
    const url = { url: this.state.term };
    // eslint-disable-next-line react/prop-types
    this.props.onGenerate(url);
  }

  render () {
    return (
          <div className="GenerateBar">
            <input placeholder="http://" onChange={this.handleTermChange} />
            <WebSocket url={this.state.term}/>
          </div>
    );
  }
}

export default GenerateBar;
// <button className="GenerateButton" onClick={this.generateShortUrl}>Generate</button>
