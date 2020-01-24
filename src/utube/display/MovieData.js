import React from 'react';


export default class MovieData extends React.Component  {
  constructor(props) {
    console.log("started....")
      super();
      this.state = {
        movies: []
      };
        console.log("started1....")
  }

  componentDidMount() {
   fetch('https://api.themoviedb.org/3/discover/movie?api_key=b2b4f13d3a253edb3015b11f882f0aa3&language=te&year=2019')
   .then(res => res.json())
   .then((data) => {
     this.setState({ movies: data })
     console.log("movies"+this.state.movies)
   })
   .catch(console.log)
 }
  /*componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=b2b4f13d3a253edb3015b11f882f0aa3&language=te&year=2019')
    .then(response => response)
    console.log("started4...."+response);
  }*/
  render(){
  return(
    <h1>players</h1>
  )
  }
  }
