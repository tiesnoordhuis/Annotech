import React from "react"
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

export default class LinkOffsite extends React.Component {
    render() {
      var style = {
        "background-image": `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
          url(${this.props.linkObject.background})`,
      }

      return (
        <Col xs={12} md={6}>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} style={style} className={"linkObject my-3 p-0"}>
              <div className={"p-4 m-4 display-4 text-center"}>
                <a href={this.props.linkObject.url} className={"linkUrl"}>
                  {this.props.linkObject.title}
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      );
    }
  }

