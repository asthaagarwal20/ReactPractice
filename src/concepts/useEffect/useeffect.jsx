import React, { useEffect } from 'react'

function Count() {
    const[count,Setcount]=React.useState(0)
    useEffect(()=>{
      console.log("Start")
    },[])
    
    useEffect(()=>{
      console.log("Count updated")
    },[count])

    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
  return (
    <div>
    <button onClick={()=>Setcount(count+1)}>Click {count} times</button>  
    </div>
  )
}

export default Count;
