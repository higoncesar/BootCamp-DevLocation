import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ModalActions } from '../../store/ducks/modal';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';

import { ipApi } from '../../services/api';
import { call } from 'redux-saga/effects';

const publicIp = require('public-ip');

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  };

  state = {
    viewport: {},
  };

  async componentDidMount() {
    const { _resize } = this;
    window.addEventListener('resize', _resize);
    _resize();

    const IPV4 = await publicIp.v4();
    const { data } = await ipApi.get(`/json/${IPV4}`);
    this.setState({
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: data.lat,
        longitude: data.lon,
        zoom: 10,
      },
    });
  }

  componentWillUnmount() {
    const { _resize } = this;
    window.removeEventListener('resize', _resize);
  }

  _resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;
    showModal({ longitude, latitude });
  };

  render() {
    const { users } = this.props;
    return (
      <MapGL
        // eslint-disable-next-line react/destructuring-assignment
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(user => (
          <Marker
            key={user.id}
            latitude={user.latitude}
            longitude={user.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src={user.avatar}
              alt="marker"
            />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
