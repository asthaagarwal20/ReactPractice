import React, { Component } from 'react'

class ConditionalRenderingEg extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
    
  render() {
      if(this.state.isLoggedin)
      return (<div>Welcome Astha</div>)
      else
      return (<div>Welcome Guest</div>)
  }
}

export default ConditionalRenderingEg
