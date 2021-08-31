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
    const json = await response.json();
    return json;
  }

  async login (data) {
    const response = await fetch(`${this.API_HOST}/login`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST",
      credentials: "include"
    });
    const json = await response.json();
    return json;
  };
}

export default new Api();
