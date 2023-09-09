import React from 'react'

function List() {
    const number=[1,2,3,4,5]
    const twiceNo=number.map((no)=>no *2)
  return (
    <div>
      {twiceNo}
    </div>
  )
}

export default List
