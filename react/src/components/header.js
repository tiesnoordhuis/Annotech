import React from "react"
import Navbar from "react-bootstrap/Navbar"

export default class Footer extends React.Component {
    render() {
      return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    Annotech
                </Navbar.Brand>
            </Navbar>
        </div>
      );
    }
  }