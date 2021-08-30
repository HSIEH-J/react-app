class Api {
  constructor () {
    this.API_HOST = "http://www.isho.xyz";
    this.accessToken = undefined;
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
}

export default new Api();
