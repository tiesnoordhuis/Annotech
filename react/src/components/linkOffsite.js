import React from "react"
import Badge from "react-bootstrap/Badge"
import Col from 'react-bootstrap/Col'

export default class LinkOffsite extends React.Component {
    render() {
      return (
        <Col xs={12} md={6}>
          <Badge variant="secondary">
            <a href={this.props.linkObject.url}>
              {this.props.linkObject.title}
            </a>
          </Badge>
        </Col>
      );
    }
  }

