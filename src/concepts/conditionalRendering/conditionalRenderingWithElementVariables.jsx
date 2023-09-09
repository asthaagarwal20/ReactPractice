import React, { Component } from 'react'

class ConditionalRenderingEg2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
    
  render() {
      let message
      if(this.state.isLoggedin)
      message= <div>Welcome Astha</div>
      else
      message= <div>Welcome Guest</div>
      return  <div>{message}</div>
  }
}

export default ConditionalRenderingEg2
