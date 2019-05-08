import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form id="search-form" class="hide">
        <label for="search">Search for a location</label>
        <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}

export default Search;