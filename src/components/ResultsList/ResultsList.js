import React from "react";
import "./ResultsList.css";
import witness from "./witness.png";

class ResultsList extends React.Component {
  constructor (props) {
    super(props);

    this.showRedirectTimes = this.showRedirectTimes.bind(this);
  }

  showRedirectTimes (e) {
    console.log(e.target.id);
    const id = e.target.id;
    this.props.onRedirectTimes(id);
    e.target.innerHTML = this.props.showTimesResult;
  }

  render () {
    return (
      <div>
      {
        this.props.resultsList.map(result => {
          return (
            <tr className="GenerateResults" key={result.id}>
              <td className="Item">checkbox</td>
              <td className="Item">
                  <a href={result.url} target="_blank" rel="noreferrer">{result.url}</a>
              </td>
              <td className="Item">
                  <a href={result.shortLink} target="_blank" rel="noreferrer">{result.shortLink}</a>
              </td>
              <td className="Item">
                  <img src={witness} className="EyeImg" onClick={this.showRedirectTimes} id={result.id}/>
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
