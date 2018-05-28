import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import request from 'superagent';
require('dotenv').config();
const YELP_KEY  = process.env.YELP_API_KEY;
const GMAPS_KEY = process.env.GMAPS_API_KEY;
let google = window.google;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }





  render() {
    let location = new google.maps.LatLng(38.4223700, -121.4341900);
    let map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 13
    });


    return(
      <div className="mapContainer">
          <div id="map"></div>
      </div>
    );
  }


}

export default Map;
