import React from "react";
import "./ResultsList.css";
// import witness from "./witness.png";

class ResultsList extends React.Component {
  constructor (props) {
    super(props);

    this.showRedirectTimes = this.showRedirectTimes.bind(this);
  }

  showRedirectTimes (e) {
    console.log(e.target.id);
    const id = e.target.id;
    const data = { data: [{ id: id }] };
    this.props.onRedirectTimes(data);
  }

  render () {
    const list = [];
    for (const n in this.props.resultsList) {
      list.push(this.props.resultsList[n]);
    }
    return (
      <div>
        {
          list.map((result) => {
            if (result.status === "img") {
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
                              <img src={result.render} className="EyeImg" onClick={this.showRedirectTimes} id={result.id}/>
                          </td>
                        </tr>
              );
            } else {
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
                              {result.render.toString()}
                          </td>
                        </tr>
              );
            }
          })
        }

      </div>
    );
  }
}

export default ResultsList;
