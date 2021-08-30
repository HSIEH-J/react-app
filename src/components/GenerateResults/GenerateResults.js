import React from "react";
import "./GenerateResults.css";

class GenerateResults extends React.Component {
  render () {
    return (
      <tr className="GenerateResults">
                <td className="Item">checkbox</td>
                <td className="Item">
                    <a href={this.props.generateResult.url} target="_blank" rel="noreferrer">{this.props.generateResult.url}</a>
                </td>
                <td className="Item">
                    <a href={this.props.generateResult.shortLink} target="_blank" rel="noreferrer">{this.props.generateResult.shortLink}</a>
                </td>
      </tr>
    );
  }
}

export default GenerateResults;
