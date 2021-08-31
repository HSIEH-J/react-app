import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import App from "./components/App/App";
import Register from "./components/Register/Register";
const MySwal = withReactContent(Swal);

const cookieName = document.cookie.split("=");
if (cookieName !== "user") {
  MySwal.fire(
    "Welcome to short link website!",
    "Oops...you have to sign up or log in first.",
    "info"
  );
  ReactDOM.render(<Register />, document.getElementById("root"));
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
