import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class Api {
  constructor () {
    // this.API_HOST = "https://www.isho.xyz";
    this.API_HOST = "http://localhost:3000";
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
      throw new Error(MySwal.fire("Please try again..."));
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
      throw new Error(MySwal.fire("Please check email format or try another email..."));
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
      throw new Error(MySwal.fire("Please check email format or try another password..."));
    }
    const json = await response.json();
    return json;
  };

  async logOut () {
    console.log("logOut");
    const response = await fetch(`${this.API_HOST}/logout`, {
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "GET"
    });
    if (response.status !== 200) {
      throw new Error(MySwal.fire("Please try again..."));
    }
    const json = await response.json();
    return json;
  };
}

export default new Api();
// "https://www.isho.xyz/link"
