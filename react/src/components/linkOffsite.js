import React from "react"

export default class LinkOffsite extends React.Component {
    render() {
      return (
        <div className="linkOffsite">
          <h1>link to {this.props.name}</h1>
        </div>
      );
    }
  }

