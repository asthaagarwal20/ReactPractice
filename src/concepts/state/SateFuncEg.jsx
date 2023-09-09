import React from 'react'

function GreetSetState(props){
    const [user, setName] = React.useState("Riya");
  const [age, setAge] = React.useState(10);
  const [hobbies, setHobbies] = React.useState(["cricket", "chess"]);
  const [abc1, setDegrees] = React.useState({
    firstDegree: "MCS",
    secondDegree: "CSA",
  });

  return (
    <div>
      hello from functional componenet {2 + 2} user is {user} and age is {age}{" "}
      {hobbies[1]} {abc1.secondDegree} {props.abc} {props.age}
    </div>
  );
}
export  default GreetSetState;