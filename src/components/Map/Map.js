import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import request from 'superagent';
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

require('dotenv').config();
const GMAPS_KEY = process.env.GMAPS_API_KEY;

class renderMap extends Component {
    constructor(props){
      super(props);
      this.state = {
        lat: props.lat,
        lng: props.lng
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        lat: nextProps.lat,
        lng: nextProps.lng
      });
    }

    render(){
      const { lat, lng } = this.state;
      return (
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{ lat, lng }}
        >
        </GoogleMap>
      );

    }
}


const Map = compose(
  withScriptjs,
  withGoogleMap
)(renderMap);


export default Map;
