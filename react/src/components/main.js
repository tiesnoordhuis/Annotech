import React from "react"
import LinkOffsite from "./linkOffsite"
import Jumbotron from "react-bootstrap/Jumbotron"

export default class Main extends React.Component {
    render() {
      return (
        <div className="container-fluid">
            <div className="row">
            <Jumbotron className="rounded-5 mx-auto my-auto">
                <div class="container">
                    <h1 class="display-4 text-center">Annotech Groep</h1>
                    <br/>
                    <p class="lead">
                        Annotech is een groep van van gecertificeerde technische bedrijven
                        <br/>
                        werkzaam in de middel grote en zware industrie
                        <ul>
                        <li>productie van machines, machineonderdelen</li>
                        <li>gespecialiseerd laswerk</li>
                        <li>gespecialiseerd in toepassing van slijtvaste materialen en laswerk</li>
                        <li>uitvoeren van grotere totaal projecten inclusief projectmanagement</li>
                        <li>onderhoud aan machines</li>
                        <li>onderhoud op basis van offerte, in werkplaats en op locatie</li>
                        <li>contract onderhoud, in werkplaats en op locatie</li>
                        </ul>
                    </p>
                    <p class="lead">
                        Voor informatie over activiteiten dochter ondernemingen:
                        <ul>
                        <li>
                            <LinkOffsite linkObject={{"title": "Rolas", "url": "https://www.rolas.nl/"}} /> 
                        </li>
                        <li>
                            <LinkOffsite linkObject={{"title": "Oosterhuis", "url": "https://www.oosterhuistechniek.nl/"}} /> 
                        </li>
                        </ul>
                    </p>
                </div>
            </Jumbotron>
            </div>
        </div>
      );
    }
  }

