import React from 'react'

function Props(props){
    console.log(props);
    return (
    <div>name {props.name} age {props.age} </div>
    );
}
export default Props;