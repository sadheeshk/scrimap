import React from "react"

function Sidelinks(props){
  var yearList = [];


  let currentYear=new Date().getFullYear();
  for (var i=0; i<20; i++) {
    yearList.push(currentYear-i);
  }

  return(
        <div className="side-link">
        {yearList.map(year=>
             <a href="" onClick={()=>props.handleYearClick(year)}>{year}</a>
        )}


        </div>
   )
}
export default Sidelinks
