import React, { Component } from 'react';
import Movie from './Movie';

export class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            search:""
        }

    }
    searchText = event =>{
        const search = event.target.value
        this.setState({search})
    }
    render() {
        const movies = this.props.movies.filter(m => m.title.toLowerCase().includes(this.state.search.toLowerCase()))
        return(
            <div className="gallery">
                <input type="text" name="search" value={this.state.search} onChange={this.searchText} />
                <span className="budget"> Budget:${this.props.budget}</span>
                {
                    this.props.movies.find(m => m.isRented) 
                    ?( <div className="rented">
                        <h3>Rented</h3>
                        {movies.filter(m => m.isRented).map(m => <Movie budget={this.props.budget} key={m.id} changeRent={this.props.changeRent} movie={m}/> )}  
                    </div>)
                    :""
                } 
                
                <div className="catalog">
                    <h3>Catalog</h3>
                    {movies.filter(m => !m.isRented).map(m => <Movie budget={this.props.budget} key={m.id} changeRent={this.props.changeRent} movie={m}/> )}  
                </div>
            </div>
        )
    }
  }
  
  export default Catalog;