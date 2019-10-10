import React from 'react';

class Create extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title: '', Year: '',Poster: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handlePosterChange = this.handlePosterChange.bind(this);

  }
  
  handleMovieTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleYearChange(e){
    this.setState({Year: e.target.value});
  }
  handlePosterChange(e){
    this.setState({Poster: e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Title+"      Released : " + this.state.Year+
    "        "+this.state.Poster);
    e.preventDefault();
    this.setState({Title: '', Year: '', Poster:''});
  }

  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Movie Title</label>
            <input 
            type='text'
            value={this.state.Title}
            onChange= {this.handleMovieTitleChange}
            ></input>
          </div>

          <div>
            <label>Year Released</label>
            <input 
            type='text'
            value={this.state.Year}
            onChange= {this.handleYearChange}
            ></input>
          </div>

          <div>
            <label>Movie Poster URL</label>
            <input 
            row='3'
            value={this.state.Poster}
            onChange= {this.handlePosterChange}
            ></input>
          </div>

          <div>
            <input
            type='submit'
            value= 'Add Movie'
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;