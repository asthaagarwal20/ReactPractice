import React from "react";

function Scoreboard(props) {
  const [score, setScore] = React.useState(100);

  React.useEffect(() => {
    console.log("get score form the server");
  }, []);

  React.useEffect(() => {
    console.log("componenet updated");
    if (score > 110) {
      console.log("congrats");
    }
  }, [score, props.data]);

  return (
    <div>
      This is a Scoreboard
      <div>Score is {score}</div>
      <button onClick={() => setScore(score + 1)}>Inc score</button>
    </div>
  );
}

export default Scoreboard;
