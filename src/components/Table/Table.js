import React from "react";
import "./Table.css";
import TableTitle from "../TableTitle/TableTitle";
import ResultsList from "../ResultsList/ResultsList";

class Table extends React.Component {
  render () {
    const list = [];
    for (const n in this.props.resultsList) {
      list.push(this.props.resultsList[n]);
    }
    console.log(list);
    return (
        <table className="Table">
          <TableTitle onUpdate={this.props.onUpdate}
                      isShowRedirectTimes={this.props.isShowRedirectTimes}/>
          {
            list.map((result) => {
              return <ResultsList result={result}
                                  key={result.id}
                                  onRedirectTimes={this.props.onRedirectTimes}/>;
            })
          }
        </table>
    );
  }
}

export default Table;
