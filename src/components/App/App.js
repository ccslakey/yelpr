import React, { Component } from 'react';
import Map from '../Map/Map';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';
import request from 'superagent';

require('dotenv').config();
const GMAPS_API_URL = process.env.GMAPS_API_URL;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
      bizCount: 0,
      lat: 0,
      lng: 0,
      zip: 0,
      term: "",

    }
    this.makeYelpRequest = this.makeYelpRequest.bind(this);
    this.loadPosition = this.loadPosition.bind(this);
  }

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;

      this.setState({
        lat: latitude,
        lng: longitude
      });
    } catch (error) {
      console.log(error);
    }
  };

  makeYelpRequest(term = "pizza", zip = "94118", limit = 20, offset = 0) {
    const APIUrl = "http://localhost:8000/search";

    request
      .get(APIUrl)
      .query({
        'location': zip,
        term,
        limit,
        offset
      })
      .set('accept', 'json')
      .buffer()
      .end((err, res) => {
        if(err){
          console.log("err:\n");
          console.log(err);
        }

        if (res) {
          // this.setState({
          //   lat: res.body.region.center.latitude,
          //   lng: res.body.region.center.longitude,
          //   bizCount: res.body.total
          // })
          console.log("yay!");
          console.log(res);
        }
      });
  }

  renderMap() {
    this.makeYelpRequest();

    const { lat, lng } = this.state;
    if (lat !== 0 && lng !== 0) {
      return (
        <div className="App">
          <Map
            lat={this.state.lat}
            lng={this.state.lng}
            businesses={this.state.businesses}
            googleMapURL={`${GMAPS_API_URL}`}
            loadingElement={<div style={{ height: `100%` }}></div>}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

        </div>
      );
    } else {
      return(<div className="loadersmall"></div>);
    }
  }

  render() {
    this.makeYelpRequest();

    return(
      <div className="main">
        <div className="sideBar">

        </div>
        <div className="appWindow">
              <SearchForm />
        </div>
      </div>
    )

  }
}


export default App;
