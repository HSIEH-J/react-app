import React from "react";
import "./Authentication.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class Authentication extends React.Component {
  constructor (props) {
    super(props);

    this.register = this.register.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  async register () {
    const { value: formValues } = await MySwal.fire({
      title: "Register",
      html:
        "<input id=\"swal-input1\" class=\"swal2-input\" placeholder=\"Email\">" +
        "<input id=\"swal-input2\" class=\"swal2-input\" placeholder=\"Password\">",
      focusConfirm: false,
      preConfirm: () => {
        return {
          email: document.getElementById("swal-input1").value,
          password: document.getElementById("swal-input2").value
        };
      }
    });
    const data = { email: formValues.email, password: formValues.password };
    this.props.onRegister(data);
  }

  async logIn () {
    const { value: formValues } = await MySwal.fire({
      title: "Log In",
      html:
        "<input id=\"swal-input1\" class=\"swal2-input\" placeholder=\"Email\">" +
        "<input id=\"swal-input2\" class=\"swal2-input\" placeholder=\"Password\">",
      focusConfirm: false,
      preConfirm: () => {
        return {
          email: document.getElementById("swal-input1").value,
          password: document.getElementById("swal-input2").value
        };
      }
    });
    const data = { email: formValues.email, password: formValues.password };
    this.props.onLogIn(data);
  }

  async logOut () {
    this.props.onLogOut();
  }

  render () {
    if (this.props.authentication === true) {
      return (
        <div className="Authentication">
          <button className="AuthButton" onClick={this.logOut}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="Authentication">
          <button className="AuthButton" onClick={this.register}>Register</button>
          <button className="AuthButton" onClick={this.logIn}>Log In</button>
        </div>
      );
    }
  }
}

export default Authentication;
