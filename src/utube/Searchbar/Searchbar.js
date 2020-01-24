import React from "react"


function Searchbar(){

  return(

        <div className="wrap">
           <div className="search">
              <input type="text" class="searchTerm" placeholder="What are you looking for?" />
              <button type="submit" class="searchButton">
                Go
             </button>
           </div>
          </div>

   )
}

export default Searchbar
