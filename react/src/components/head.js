import React from "react"

export default class LinkOffsite extends React.Component {
    render() {
        return (
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" type="text/css" href="public/css/styleties.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            </head>
        )
    }
}