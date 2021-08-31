class Api {
  async generateShortUrl (data) {
    const response = await fetch("link", {
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
    const response = await fetch("/login", {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST"
    });
    const json = await response.json();
    return json;
  };
}

export default new Api();
