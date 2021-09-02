import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class Api {
  constructor () {
    this.API_HOST = "https://www.isho.xyz";
  }

  async generateShortUrl (data) {
    const response = await fetch(`${this.API_HOST}/link`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST"
    });
    if (response.status !== 200) {
      throw new Error(MySwal.fire(
        "Oops! seems something went wrong...",
        "Please Try Again Later.",
        "warning"
      ));
    }
    const json = await response.json();
    return json;
  }

  async register (data) {
    const response = await fetch(`${this.API_HOST}/signup`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST"
    });
    if (response.status !== 200) {
      console.log("123");
      throw new Error(MySwal.fire(
        "Please Check Again.",
        "Wrong Email Format Or Try Another Email",
        "warning"
      ));
    }
    const json = await response.json();
    return json;
  };

  async showRedirectTimes (id) {
    const response = await fetch(`${this.API_HOST}/times`, {
      body: JSON.stringify(id),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST"
    });
    if (response.status !== 200) {
      throw new Error(MySwal.fire(
        "Oops! seems something went wrong...",
        "Please Try Again Later.",
        "warning"
      ));
    }
    const json = await response.json();
    return json;
  };

  async login (data) {
    const response = await fetch(`${this.API_HOST}/login`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST"
    });
    if (response.status !== 200) {
      throw new Error(MySwal.fire(
        "Please Check Again.",
        "Wrong Email Format Or Password",
        "warning"
      ));
    }
    const json = await response.json();
    return json;
  };

  async logOut () {
    const response = await fetch(`${this.API_HOST}/logout`, {
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "GET"
    });
    if (response.status !== 200) {
      throw new Error(MySwal.fire(
        "Please Check Again.",
        "Wrong Email Format Or Try Another Email",
        "warning"
      ));
    }
    const json = await response.json();
    return json;
  };
}

export default new Api();
// "https://www.isho.xyz/link"
