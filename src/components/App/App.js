import React from "react";
import "./App.css";
import Api from "../../util/Api";
import GenerateBar from "../GenerateBar/GenerateBar";
import GenerateResults from "../GenerateResults/GenerateResults";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      generateResult: ""

    };

    this.generate = this.generate.bind(this);
  }

  generate (data) {
    Api
      .generateShortUrl(data)
      .then((generateResult) => {
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
              <tr>
                <th className="Item">Manipulate</th>
                <th className="Item">URL</th>
                <th className="Item">Short Link</th>
                <th className="Item">times</th>
              </tr>
              <GenerateResults generateResult={this.state.generateResult} />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <List UrlList={this.state.shortLinkResults}/>
