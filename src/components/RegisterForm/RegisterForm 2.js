import React from "react";
import "./RegisterForm.css";

class RegisterForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.register = this.register.bind(this);
  }

  // get email value
  handleEmailChange (event) {
    this.setState({ email: event.target.value });
  }

  // get password value
  handlePasswordChange (event) {
    this.setState({ password: event.target.value });
  }

  // call api to get short URL
  register () {
    const data = { email: this.state.email, password: this.state.password };
    // eslint-disable-next-line react/prop-types
    this.props.onRegister(data);
  }

  render () {
    return (
          <div className="RegisterForm">
            <input placeholder="Email" onChange={this.handleEmailChange} />
            <input placeholder="Password" onChange={this.handlePasswordChange} />
            <button className="RegisterButton" onClick={this.register}>Submit</button>
          </div>
    );
  }
}

export default RegisterForm;
