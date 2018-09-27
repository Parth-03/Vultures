import * as React from 'react';
import GoogleMap from '../components/Map'

export default class Home extends React.Component{
  render(){
      return(
        <div className="container callmepadder">
        <h1>Where is My food?</h1>
        <GoogleMap></GoogleMap>
        </div>
      );
  }
}