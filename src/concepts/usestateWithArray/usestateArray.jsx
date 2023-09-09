import React,{useState} from 'react'

function CounterArray() {
    const[items,setItems]=React.useState([])

    const Add=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10+1)
        }])
    }
    return (
    <div>
        <button onClick={Add}>Add an element</button>
        <ul>{
      items.map(item=>(<h2 key={item.id}> {item.value}</h2>))
        }
        </ul>
    </div>
  )
}

export default CounterArray;
