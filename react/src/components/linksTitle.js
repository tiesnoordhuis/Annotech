import React from "react"
import Col from 'react-bootstrap/Col'

export default class LinksTitle extends React.Component {
    render() {
      return (
        <Col xs={12}>
            <h1 className="display-4 text-center">
                {this.props.text}
            </h1>
        </Col>
      );
    }
  }

