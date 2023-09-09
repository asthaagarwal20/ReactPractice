import React from 'react'

function GreetUser(props){
    const [user, setName] = React.useState("Riya");
  return (
    <div>
      hello  user is {user} 
    </div>
  );
}
export  default GreetUser;