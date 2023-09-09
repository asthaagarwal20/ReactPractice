import React from 'react'
import Person from './Person';

function ListRenderingEg() {
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
    const personList=persons.map(person=>(<Person person={person} />))
  return (
    <div>
     {personList}
    </div>
  )
}
export default ListRenderingEg;
