import React from 'react'

function ChildOne({msgone,abc}) {

    const clicked = () => {
        abc({name:"ss",age:25})
    }

    return (
        <div>
            Child One
            Message from parent is {msgone}
            <button onClick={clicked}>Send an object to parenttwo</button>
        </div>
    )
}

export default ChildOne