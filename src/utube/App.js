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


fetch('https://api.themoviedb.org/3/discover/movie?api_key=b2b4f13d3a253edb3015b11f882f0aa3&with_original_language=ta&language=ta&sort_by=release_date.asc&year='+this.props.year)
   .then(res => res.json())
   .then((data) => {
     this.setState({ pagesCount: data['total_pages'] })
     console.log(this.state.pagesCount)
        console.log(this.state.pagesCount)


  console.log("looping"+this.state.pagesCount);
   for(var i=1;i<=this.state.pagesCount;i++){
    //  console.log("looping"+i);
     fetch('https://api.themoviedb.org/3/discover/movie?api_key=b2b4f13d3a253edb3015b11f882f0aa3&with_original_language=ta&language=ta&sort_by=release_date.asc&year='+this.props.year+'&page='+i)
     .then(res => res.json())
     .then((data) => {

    // console.log(data['results'])

       this.setState({ completeMovieList: this.state.completeMovieList.concat(data['results']) })

     })
   }   })
    .catch(console.log)
