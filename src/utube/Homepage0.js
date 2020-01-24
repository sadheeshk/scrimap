import React from "react"
import Sidelinks from "./Sidelinks/Sidelinks"
import Searchbar from "./Searchbar/Searchbar"
import DisplayContents from "./display/DisplayContents"
import utubecss from "./utube.css"


function Homepage(){


  return (

      <div className="main-page">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col"><Searchbar /></div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--2-col"><Sidelinks /></div>
          <div class="mdl-cell mdl-cell--10-col"><DisplayContents /></div>
        </div>
    </div>
  )

}



export default Homepage
