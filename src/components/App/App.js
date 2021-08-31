import React from "react";
import "./App.css";
import Api from "../../util/Api";
import GenerateBar from "../GenerateBar/GenerateBar";
import ResultsList from "../ResultsList/ResultsList";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      generateResult: "",
      resultsList: []

    };

    this.generate = this.generate.bind(this);
  }

  generate (data) {
    Api
      .generateShortUrl(data)
      .then((generateResult) => {
        const results = this.state.resultsList;
        results.push(generateResult);
        this.setState({ resultsList: results });
        this.setState({ generateResult: generateResult });
      })
      .catch((e) => {
        window.alert(e.message);
      });
  }

  render () {
    return (
      <div>
        <h1>Short Links</h1>
        <div className="App">
          <GenerateBar onGenerate={this.generate}/>
          <div className="Content-List">
            <table className="Bar">
              <tr className="BarTitle">
                <th className="Item">Manipulate</th>
                <th className="Item">URL</th>
                <th className="Item">Short Link</th>
                <th className="Item">times</th>
              </tr>
              <ResultsList generateResult={this.state.generateResult}
                           resultsList={this.state.resultsList}/>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <List UrlList={this.state.shortLinkResults}/>
