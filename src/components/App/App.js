import React from "react";
import "./App.css";
import Api from "../../util/Api";
import Authentication from "../Authentication/Authentication";
import GenerateBar from "../GenerateBar/GenerateBar";
import ResultsList from "../ResultsList/ResultsList";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      generateResult: "",
      resultsList: [],
      isAuthentication: false
    };

    this.generate = this.generate.bind(this);
    this.register = this.register.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
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

  register (data) {
    Api
      .register(data)
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentication: true });
      })
      .catch((e) => {
        window.alert(e.message);
      });
  }

  logIn (data) {
    Api
      .login(data)
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentication: true });
      })
      .catch((e) => {
        window.alert(e.message);
      });
  }

  logOut () {
    Api
      .logOut()
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentication: false });
        MySwal.fire("Log Out Successfully!");
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
          <Authentication onRegister={this.register}
                          onLogIn={this.logIn}
                          onLogOut={this.logOut}
                          authentication={this.state.isAuthentication}/>
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
