import React from "react";
import "./App.css";
import Api from "../../util/Api";
import Authentication from "../Authentication/Authentication";
import GenerateBar from "../GenerateBar/GenerateBar";
import ResultsList from "../ResultsList/ResultsList";
import Header from "../Header/Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      generateResult: "",
      resultsList: {},
      isAuthentication: false,
      isShowRedirectTimes: false,
      showTimesUrl: []
    };

    this.generate = this.generate.bind(this);
    this.register = this.register.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.showRedirectTimes = this.showRedirectTimes.bind(this);
    this.updateRedirectTimes = this.updateRedirectTimes.bind(this);
  }

  generate (data) {
    Api
      .generateShortUrl(data)
      .then((generateResult) => {
        const results = this.state.resultsList;
        // results.push(generateResult);
        results[generateResult.id] = generateResult;
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
    console.log(this.state.resultsList);
    Api
      .showRedirectTimes(id)
      .then((response) => {
        this.setState({ isShowRedirectTimes: true });
        const resultsList = this.state.resultsList;
        resultsList[id.data[0].id].status = "times";
        resultsList[id.data[0].id].render = response.data[0].times;
        // resultsList.forEach((ele) => {
        //   if (ele.id.toString() === id.id.toString()) {
        //     console.log(ele.id);
        //     console.log(id.id);
        //     ele.status = "times";
        //     ele.render = response.times;
        //   }
        // });
        this.setState({ resultsList: resultsList });
        const showTimesUrl = this.state.showTimesUrl;
        showTimesUrl.push({ id: id.data[0].id });
        this.setState({ showTimesUrl: showTimesUrl });
        console.log(showTimesUrl);
      });
  }

  updateRedirectTimes () {
    console.log(this.state.showTimesUrl);
    const data = { data: this.state.showTimesUrl };
    Api
      .showRedirectTimes(data)
      .then((response) => {
        const resultsList = this.state.resultsList;
        response.data.forEach((ele) => {
          resultsList[ele.id].render = ele.times;
        });
        this.setState({ resultsList: resultsList });
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
              <Header showRedirectTimes={this.state.isShowRedirectTimes}
                      onUpdate={this.updateRedirectTimes}/>
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
