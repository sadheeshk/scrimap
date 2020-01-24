import React from "react"
import Sidelinks from "./Sidelinks/Sidelinks"
import Searchbar from "./Searchbar/Searchbar"
import DisplayContents from "./display/DisplayContents"
import utubecss from "./utube.css"



export default class Homepage extends React.Component {

  constructor() {

    super();
      console.log("started. Homepage Constuctir...")
      this.state = {
        year:''
      };
        this.handleYearClick=this.handleYearClick.bind(this);
  }


handleYearClick(year){
  console.log("clicked year"+year)
  //this.setState({year:year});
  console.log("clicked year "+this.state.year)


}

render(){
  return (

        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--2-col"><Sidelinks handleYearClick={this.handleYearClick} /></div>
          <div class="mdl-cell mdl-cell--10-col"><DisplayContents year={this.state.year}/></div>
        </div>
      )
}

}
