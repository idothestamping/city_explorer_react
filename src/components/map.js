import React from 'react';

class Map extends React.Component {

  render() {
    let location = this.props.LngLat.locationResult;

    let mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap
    &key=${process.env.REACT_APP_GEOCODE_API_KEY}`;

    let mapImg;
    if (location) {
      mapImg = <img src={mapUrl} alt="google-maps" />;
    }

    return (
      <React.Fragment>
      {mapImg}
      </React.Fragment>
    );
  }
}

export default Map;