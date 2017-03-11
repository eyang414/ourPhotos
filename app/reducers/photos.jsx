import axios from 'axios';
const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

//----REDUCER
const reducer = (state=null, action) => {
  switch(action.type) {
  case RECEIVE_PHOTOS:
    return action.photos
  }
  return state
}

//----ACTION CREATOR
export const photosAction = photos => ({
  type: RECEIVE_PHOTOS, photos
})

//----AXIOS
export const receivePhotos = () =>
  dispatch =>
    axios.get('/api/photos')
      .then(response => {
        const photos = response.data
        dispatch(photosAction(photos))
      })
      .catch(failed => dispatch(photosAction(null)))

      //TODO: set up api/photos

export default reducer;
