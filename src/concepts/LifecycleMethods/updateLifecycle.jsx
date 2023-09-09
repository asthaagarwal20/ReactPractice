import React, { Component } from 'react'
import LifecycleD from './LifeCycleD'

export class LifecycleC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Astha'
      }
      console.log("ConstructorC called")
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log( 'getDerivedStateFromPropsC called')
        return null;
    }
    componentDidUpdate()
    {
        console.log("ComponentDidUpdateC called")
    }
    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdateC called")
        return null;
    }
    getSnapshotBeforeUpdate(){
        console.log( "getSnapshotBeforeUpdateC called")
    }
     ChangeState=()=>{
        this.setState({
            name:'Agarwal'
        })      
     }
  render() {
    console.log("renderC called");
    return (
      <div>
       lifecycle c
       <button onClick={(this.ChangeState)}>Change State</button>
       <LifecycleD />
      </div>
    )
  }
}

export default LifecycleC
