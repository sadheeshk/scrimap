import React from "react"

function Joke(props) {
  console.log(props);
    return (
      <div>

        <h3 style={{display: props.joke.ques ? "block" : "none"}}>Question : {props.joke.ques} </h3>
        <h3 style={{color: !props.joke.ques && "Orange"}}> Answer :  {props.joke.ans} </h3>
        <hr></hr>
      </div>
    )
}

export default Joke
