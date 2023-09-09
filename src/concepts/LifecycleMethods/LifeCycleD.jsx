import React, { Component } from 'react'

export class LifecycleD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Astha'
      }
      console.log("ConstructorD called")
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log( 'getDerivedStateFromPropsD called')
        return null;
    }
    componentDidUpdate()
    {
        console.log("ComponentDidUpdateD called")
    }
    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdateD called")
        return null;
    }
    getSnapshotBeforeUpdate(){
        console.log( "getSnapshotBeforeUpdateD called")
    }

  render() {
    console.log("renderD called");
    return (
      <div>
      </div>
    )
  }
}

export default LifecycleD
