import React, { useEffect } from 'react'

function ConditionalCount() {
    const[count,Setcount]=React.useState(0)
    const[name,Setname]=React.useState('')
    useEffect(()=>{
        console.log("updating document title");
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e=>Setname(e.target.value)}/>
    <button onClick={()=>Setcount(count+1)}>Click {count} times</button>  
    </div>
  )
}

export default ConditionalCount;
