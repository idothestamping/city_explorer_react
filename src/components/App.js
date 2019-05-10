import React from 'react';
import Header from './header';
import SearchForm from './search-form';
import Map from './map';
import {SearchResults} from './search-results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: { //default to seattle
        lat: 47.6062095,
        lng: -122.3320708, 
      },
      weatherResult: {},
      yelpResult: {},
      moviesResult: {},
      eventsResult: {}
    };
  }

  handleSearch = data => {
    this.setState(data)
}

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm handler={this.handleSearch} />
        <Map LngLat={this.state} />
        <SearchResults 
          value={this.state} 
          weather={this.state.weatherResult} 
          yelp={this.state.yelpResult} 
          movies={this.state.moviesResult}  
          events={this.state.eventsResult} />
      </React.Fragment>
    );
  }
}

export default App;