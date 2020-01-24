import React from "react"
import Content from "./Content"


export default class DisplayContents extends React.Component {

  constructor(props) {
          super(props);

      this.state = {
        pagesCount: [],
        completeMovieList:[]

      };
        console.log("started1....")
  }

  componentDidMount() {
       this.setState({ completeMovieList: []})

 console.log ("props.year"+this.props.year)




 }














  render(){



  return(
        <div className="display-cards">


    {this.state.completeMovieList.map(movie => (
        <Content
          content={{imgUrl:'https://image.tmdb.org/t/p/w500/'+movie.poster_path,
                    name:movie.original_title,
                    phone:movie.vote_average,
                    email:movie.release_date}}/>

            ))}
        </div>
   )
 }
}
