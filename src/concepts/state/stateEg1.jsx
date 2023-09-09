import React from "react";
class WelcomeState extends React.Component {
    constructor(){
        super()
        this.state={
            message:'welcome message'
        }
    }
    render(props) {
        return (<h1>{this.state.message} from class component</h1>)
    }
}
export default WelcomeState;