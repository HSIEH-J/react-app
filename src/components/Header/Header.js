import React from "react";
import "./Header.css";
import refresh from "./refresh.png";

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.updateRedirectTimes = this.updateRedirectTimes.bind(this);
  }

  updateRedirectTimes () {
    this.props.onUpdate();
  }

  render () {
    if (this.props.showRedirectTimes === false) {
      return (
            <tr className="BarTitle">
              <th className="Item">Manipulate</th>
              <th className="Item">URL</th>
              <th className="Item">Short Link</th>
              <th className="Item">times</th>
            </tr>
      );
    } else {
      return (
            <tr className="BarTitle">
              <th className="Item">Manipulate</th>
              <th className="Item">URL</th>
              <th className="Item">Short Link</th>
              <th className="Item">
                  times
                  <img src={refresh} className="RefreshImg" onClick={this.updateRedirectTimes} />
              </th>
            </tr>
      );
    }
  }
}

export default Header;
