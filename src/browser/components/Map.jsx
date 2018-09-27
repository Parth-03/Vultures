import * as React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const ApiKey="AIzaSyA6APBYCJQynp10Vfjf0wWk9OjT8Y64Wko";

const mapStyle = {
  width: '60%',
  height: '50%'
}

class GoogleMap extends React.Component{
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14} style={mapStyle}>
        <Marker onClick={this.onMarkerClick}
           name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
      <div>
        <h1>Umass</h1>
     </div>
 </InfoWindow>
</Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (ApiKey)
})(GoogleMap)

