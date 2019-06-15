import React from "react"
import Navbar from "react-bootstrap/Navbar"

export default class Footer extends React.Component {
    render() {
      return (
        <div className="footer">
            <Navbar fixed="bottom" >
                <Navbar.Brand>
                    AnnoTech
                </Navbar.Brand>
                <Navbar.Text className="justify-content-end navbar-collapse">
                    mady by: Ties Noordhuis
                </Navbar.Text>
            </Navbar>
        </div>
      );
    }
  }

