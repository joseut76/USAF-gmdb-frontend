import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    movies: [],
    error: '',
    newSearch: ''
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/movies")
    await response.json()
      .then(
        data => {
          this.setState({ movies: data })
        },
        error => {
          this.setState({ error: 'Unable to load movies' })
        })
  }

  titleSearch(searchTitle) {
    searchTitle.toLowerCase()
    this.setState({ movies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchTitle)) })
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: target.value });
  }

  render() {
    return (
      <form id="search-movie" onSubmit={this.searchTitle}>
        <input type="text" name="newSearch" onChange={this.handleChange} value={this.state.newSearch} />
      </form>
    )

    if (this.state.error !== '') {
      return (<h1>Unable to load movies</h1>)
    }
    else if (this.state.movies !== '') {
      const titles = this.state.movies.map(movie => <li key="{movie.movieId}">{movie.title}</li>)
      return (<ul>{titles}</ul>)
    }
    else {
      return (<h1>These are my favorite movies!</h1>)
    }
  }
}

// this.state={
//   search:null
// };


// searchSpace=(event)=>{
// let keyword = event.target.value;
// this.setState({search:keyword})
// }


// return (
//   <div>
//   <input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
//   {items}
//   </div>
// )
