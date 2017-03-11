import { connect } from 'react-redux';
import axios from 'axios';
import React from 'react';
import Photos from './Photos';

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

class PhotosContainer extends React.Component{

  render(){
    console.log(this.props.routeParams.page)
    return (
      <Photos {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(PhotosContainer);
