import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './DropDown';
import Map from './Map';
import superagent from 'superagent';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      venues: []
    }
  }

  componentDidMount() {
  
    // const url = 'https://mlbmediahackatho.herokuapp.com/api/mlbroustername'
    const url = 'http://localhost:3000/api/mlbroustername/'
    // const url = 'https://api.foursquare.com/v2/venues/search?ll=40.7575285,-73.9884469&oauth_token=0DWMXELULH1PCZUJVTPBZ5ISSSD30DIXN2WZGRNEU0KZW23G&v=20161209'

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((err, res) => {
      const venues = res;
      console.log('venues', venues);

      this.setState({
        venues: venues
      })

    })

  }

  render() {
      const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    return (
      <div className="App">
        <div className="App-header">
          {
            <img src={logo} className="App-logo" alt="logo" />
          }
          <DropDown />
        </div>
        <p className="App-intro">
          <div style={ { width:600, height:450, background: 'green'} } >
            <Map center={location} markers={this.state.venues} />
          </div>
        </p>
      </div>
    );
  }
}
