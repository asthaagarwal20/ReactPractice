import React from 'react'
import ChildOne from './Childone'

function Parent({listen}) {
    const listenToChildOne = (obj) => {
           console.log("message from childone",obj.name,obj.age)
            listen(obj)
        }
    
  return (
    <div>
       Parent One 
            <ChildOne msgone="hello" abc={listenToChildOne} />
    </div>
  )
}

export default Parent
