import React from "react";
import "./TableTitle.css";
import refresh from "./refresh.png";

class TableTitle extends React.Component {
  constructor (props) {
    super(props);

    this.updateRedirectTimes = this.updateRedirectTimes.bind(this);
  }

  updateRedirectTimes () {
    this.props.onUpdate();
  }

  render () {
    if (this.props.isShowRedirectTimes === false) {
      return (
            <tr className="Title">
              <th className="UrlItem">URL</th>
              <th className="LinkItem">Short Link</th>
              <th className="TimeItem">Show Redirect Times</th>
            </tr>
      );
    } else {
      return (
            <tr className="Title">
              <th className="UrlItem">URL</th>
              <th className="LinkItem">Short Link</th>
              <th className="TimeItem">
                  <div>Show Redirect Times</div>
                  <img src={refresh} className="RefreshImg" onClick={this.updateRedirectTimes} />
              </th>
            </tr>
      );
    }
  }
}

export default TableTitle;
