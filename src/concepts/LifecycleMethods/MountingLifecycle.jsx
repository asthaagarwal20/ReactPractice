import React, { Component } from 'react'
import LifecycleB from './LfecycleB'

export class MountingLifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Astha'
      }
      console.log("Constructor called")
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log( 'getDerivedStateFromProps called')
        return null;
    }
    componentDidMount()
    {
        console.log("ComponentDisMount called")
    }
  render() {
    console.log("render called");
    return (
      <div>
       Lifecycle A
       <LifecycleB />
      </div>
    )
  }
}

export default MountingLifecycle
