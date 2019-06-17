import React from "react"
import LinksTitle from "./linksTitle"
import LinkOffsite from "./linkOffsite"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class Links extends React.Component {
    render() {
      return (
        <Container className="my-2 p-3 linkBackground">
            <Row>
                <LinksTitle text={"Informatie over dochter ondernemingen"}/>
            </Row>
            <Row>
                <LinkOffsite linkObject={{
                    "title": "Rolas",
                    "url": "https://www.rolas.nl/",
                    "background": "https://www.rolas.nl/wp-content/uploads/cropped-Rolas-logo-square-192x192.jpg",
                }} /> 
                <LinkOffsite linkObject={{"title": "Oosterhuis", "url": "https://www.oosterhuistechniek.nl/"}} />                 
            </Row>
        </Container>
      );
    }
  }

