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
      isAuthentication: false,
      isShowRedirectTimes: false
    };

    this.generate = this.generate.bind(this);
    this.register = this.register.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.showRedirectTimes = this.showRedirectTimes.bind(this);
  }

  generate (data) {
    Api
      .generateShortUrl(data)
      .then((generateResult) => {
        const results = this.state.resultsList;
        results.push(generateResult);
        this.setState({ resultsList: results });
        this.setState({ generateResult: generateResult });
      });
  }

  register (data) {
    Api
      .register(data)
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentication: true });
        MySwal.fire("Sign Up Successfully!");
      });
  }

  logIn (data) {
    Api
      .login(data)
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentication: true });
        MySwal.fire("Log In Successfully!");
      });
  }

  logOut () {
    Api
      .logOut()
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentication: false });
        MySwal.fire("Log Out Successfully!");
      });
  }

  showRedirectTimes (id) {
    Api
      .showRedirectTimes(id)
      .then((response) => {
        console.log(response);
        this.setState({ isShowRedirectTime: true });
        const resultsList = this.state.resultsList;
        resultsList.forEach((ele) => {
          if (ele.id === id.id) {
            ele.status = "times";
            ele.render = response.times;
          }
        });
        this.setState({ resultsList: resultsList });
        console.log(resultsList);
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
                           resultsList={this.state.resultsList}
                           onRedirectTimes={this.showRedirectTimes} />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <List UrlList={this.state.shortLinkResults}/>
