'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import PhotosContainer from './components/PhotosContainer'
import Photos from './components/Photos'
import MainPage from './components/MainPage'
import UploaderContainer from './components/UploaderContainer'

import { receivePhotos } from './reducers/photos'


// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav>
//       {children}
//     </div>
// )

const onPhotosEnter = () => {
  store.dispatch(receivePhotos());
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" >
        <IndexRedirect to="home" />
        <Route path="home" component={MainPage} />
        <Route path='photos' component={UploaderContainer} />
        <Route path="photos/:page" component={PhotosContainer} onEnter={onPhotosEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
