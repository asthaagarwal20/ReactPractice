import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Astha'
      }
      console.log("ConstructorB called")
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log( 'getDerivedStateFromPropsB called')
        return null;
    }
    componentDidMount()
    {
        console.log("ComponentDisMountB called")
    }
  render() {
    console.log("renderB called");
    return (
      <div>
       
      </div>
    )
  }
}

export default LifecycleB
