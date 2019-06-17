import React from "react"
import Links from "./links"
import MainContent from "./mainContent"

export default class Main extends React.Component {
    render() {
      return (
        <div className="container-fluid">
            <MainContent />
            <Links />
        </div>
      );
    }
  }

