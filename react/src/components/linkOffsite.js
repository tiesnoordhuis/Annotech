import React from "react"
import Badge from "react-bootstrap/Badge"

export default class LinkOffsite extends React.Component {
    render() {
      return (
        <div className="linkOffsite">
          <Badge variant="secondary">
            <a href={this.props.linkObject.url}>
              {this.props.linkObject.title}
            </a>
          </Badge>
        </div>
      );
    }
  }

