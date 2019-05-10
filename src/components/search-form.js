import React from 'react';
import superagent from 'superagent';

let url = 'https://city-lab9.herokuapp.com';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      search_query: ''
    };
  }

  handleChange = e => {
    this.setState({ 
      search_query: e.target.value 
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.handler(this.state.search_query);
    console.log(this.state.search_query)
    let url = `https://city-lab9.herokuapp.com/location`;
    let location = await superagent.get(url).query({data: this.state.search_query});
    this.props.handler(location.body);
  }

  handleSubmit = async e => {
    e.preventDefault();
    let query = this.state.search_query;
    let userQueryLocation = await superagent
      .get(`${url}/location`)
      .query({data : query });
    let weather = await superagent
      .get(`${url}/weather`)
      .query({data : userQueryLocation.body});
    let yelp = await superagent
      .get(`${url}/yelp`)
      .query({data : userQueryLocation.body});
    let movie = await superagent
      .get(`${url}/movies`)
      .query({data : userQueryLocation.body});
    let event = await superagent
      .get(`${url}/events`)
      .query({data : userQueryLocation.body});

    console.log(weather);

    let results = {
      locationResult: userQueryLocation.body,
      weatherResult: weather.body,
      yelpResult: yelp.body,
      eventsResult: event.body,
      moviesResult: movie.body
    }

    console.log('API RESULTS : ',results);
    this.props.handler(results);
  };

  render() {
    return (
      <section className="header">
        <form id="search-form" onSubmit={ this.handleSubmit }>
          <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
          <input type="text" name="search" value={ this.state.search_query } onChange={ this.handleChange }/>
        <button type="submit">Explore!</button>
        </form>
      </section>
    )
  }
}

export default SearchForm;