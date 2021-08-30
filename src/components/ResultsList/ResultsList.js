import React from "react";
import "./ResultsList.css";

class ResultsList extends React.Component {
  render () {
    return (
      <div>
      {
        this.props.resultsList.map(result => {
          return (
            <tr className="GenerateResults" key="1">
              <td className="Item">checkbox</td>
              <td className="Item">
                  <a href={result.url} target="_blank" rel="noreferrer">{result.url}</a>
              </td>
              <td className="Item">
                  <a href={result.shortLink} target="_blank" rel="noreferrer">{result.shortLink}</a>
              </td>
            </tr>
          );
        })
      }
      </div>
    );
  }
}

export default ResultsList;
