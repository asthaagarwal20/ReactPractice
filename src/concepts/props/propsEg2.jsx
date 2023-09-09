import React from "react";
class WelcomeProps extends React.Component {
    render(props) {
        return (<h1>hello {this.props.name}from class component</h1>)
    }
}
export default WelcomeProps;