 import React ,{useState, UseState}from 'react'
 
 function HookCounterObject() {
     const[name,setName]=useState({firstName:'',lastName:''})
   return (
     <div>
       <form>
           <input
           type="text"
           value={name.firstName}
           onChange={e =>setName({firstName:e.target.value})}
           />
            <input
           type="text"
           value={name.lastName}
           onChange={e =>setName({lastName:e.target.value})}
           />
           <h2>FirstName is-{name.firstName}</h2>
           <h2>lastName is-{name.lastName}</h2>
       </form>
     </div>
   )
 }
 
 export default HookCounterObject
 