import React from 'react';
import {Weather, Events, Yelp, Movies} from './results';

export const SearchResults = props => {

    return(
      <>
      <div className="column-container">
        <section>
          <ul className="weather-results">
          <Weather value={props.weather}/>
          </ul>
        </section>
        <section>
          <ul className="weather-results">
          <Yelp value={props.yelp}/>
          </ul>
        </section>
        <section>
          <ul className="weather-results">
          <Events value={props.events}/>
          </ul>
        </section>
        <section>
          <ul className="weather-results">
          <Movies value={props.movies}/>
          </ul>
        </section>
        </div>
        </>
    );
  };

  