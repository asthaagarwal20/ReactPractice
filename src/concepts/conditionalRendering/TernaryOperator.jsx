import React, { Component } from 'react'

class ConditionalRenderingEg3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
    
  render() {
       return (
           this.state.isLoggedin?<div>Welcome Astha</div>:<div>Welcome Guest</div>
       )
  }
}

export default ConditionalRenderingEg3
