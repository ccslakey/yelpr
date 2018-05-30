import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {



    return (
      <div>
        <form id="searchForm" onSubmit={(e) => console.log(e)}>
          <input type="text" placeholder="What are you looking for?" id="termInput"></input>
          { window.geolocation ? <input type="text" placeholder="Zip Code" id="zipInput"></input> : <div></div>}
          <input type="submit" value="Submit"></input>
          <input type="button" value="Clear"></input>
        </form>


      </div>
    )
  }
}
export default SearchForm;
