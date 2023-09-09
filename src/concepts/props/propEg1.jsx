import React from 'react'

function GreetProps(props){
    console.log(props);
    return (
    <div>Hello {props.name} from functional comp</div>
    );
}
export default GreetProps;