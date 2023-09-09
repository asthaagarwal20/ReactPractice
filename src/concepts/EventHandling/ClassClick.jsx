import React from "react";

export class ClassClick extends React.Component{
    ClickHandler(){
    console.log('Clicked the button');
    }
    render(){
        return (
        <div>
            <button onClick={this.ClickHandler}>Click Me</button>
        </div>
        )
    }
}
export default ClassClick;