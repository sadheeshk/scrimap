import React from "react"
import Sidelinks from "./Sidelinks/Sidelinks"
import Searchbar from "./Searchbar/Searchbar"
import Homepage from "./Homepage"
import DisplayContents from "./display/DisplayContents"
import utubecss from "./utube.css"



export default class App extends React.Component {

  constructor(props) {
    super(props);

  }


render(){
  return (

      <div className="main-page">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col"><Searchbar /></div>
        </div>
        <Homepage/>
    </div>
  )
}

}
