import React from 'react'
import PersonFunc from './person'

function ListRenderingEgKey() {
     const persons=[
         {
             id:1,
             name:'Astha',
             age:10
         },
         {
            id:2,
            name:'Abcd',
            age:10
         },
         {
            id:3,
            name:'efgh',
            age:10
         }
     ]
    //  const personList=persons.map(person=>(<h2>i am {person.name}</h2>))
    const personList=persons.map(person=>(<PersonFunc key={person.id} person={person} />))
  return (
    <div>
     {personList}
    </div>
  )
}
export default ListRenderingEgKey;
