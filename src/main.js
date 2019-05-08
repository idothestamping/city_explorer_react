import React from 'react';
import Search from './search.js';
import Map from './map.js';
import Result from './result.js';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Backend />
        <Geocode />
        <Search />
        <Map />
        <h2 class="query-placeholder">Here are the results for ..</h2>
        <ErrorMessage />
        <div class="column-container hide">
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
        </div>
      </main>
    )
  }
}

class Backend extends React.Component {
  render() {
    return (
      <form id="url-form">
        <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
        <input type="text" id="back-end-url" />
      </form>
    )
  }
}

class Geocode extends React.Component {
  render() {
    return (
      <form id="geocode-form">
        <label>Enter your Geocoding API Key:</label>
        <input type="text" id="api-key" />
      </form>
    )
  }
}

class ErrorMessage extends React.Component {
  render() {
    return (
      <section class="error-container"></section>
    )
  }
}

export default Main;