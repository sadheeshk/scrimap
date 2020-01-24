import React from "react"
import Joke from "./Joke"
function JokeC(){
  return(
    <div>
      <Joke  joke={{ ans:"ama"}}/>
      <Joke  joke={{ques:"hellow is this joke2? ", ans:"ama ama"}}/>
      <Joke  joke={{ques:"hellow is this joke3? ", ans:"ama ama ama"}}/>
      <Joke  joke={{ques:"hellow is this joke4? ", ans:"ama ama ama ama"}}/>
    </div>
  )
}

export default JokeC
