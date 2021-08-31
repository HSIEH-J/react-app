import React from "react";
import Api from "../../util/Api";
import RegisterForm from "../RegisterForm/RegisterForm";

class Register extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      authentication: false
    };

    this.register = this.register.bind(this);
  }

  register (data) {
    Api
      .login(data)
      .then((response) => {
        console.log(response);
        this.setState({ authentication: true });
      })
      .catch((e) => {
        window.alert(e.message);
      });
  }

  render () {
    return (
       <RegisterForm onRegister={this.register}/>
    );
  }
}

export default Register;
