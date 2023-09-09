import React from "react";
class WelcomeSetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user: "Mod",
          age: 11,
          hobbies: ["cric", "travel"],
          degrees: { firstDegree: "MCS", secondDegree: "CSA" },
        };
        this.setState({ user: "Jeff", age: 33 });
      }
    
      render() {
        return (
          <div>
            hello from class componenet user is {this.state.user} {this.state.age}{" "}
            {this.state.hobbies[1]} {this.state.degrees.secondDegree}{" "}
            {this.props.def}
          </div>
        );
      }
    }
    export default WelcomeSetState;