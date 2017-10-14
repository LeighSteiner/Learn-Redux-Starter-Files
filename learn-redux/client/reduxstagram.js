// let's go!

import React from 'react';
import { render }  from 'react-dom';

//import CSS
import css from './styles/style.styl';

//import components 
import App from './components/app';
import Single from '/components/Single';
import Photogrid from './components/Photogrid';

//import react router deps

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from'./data/config'

Raven.config(sentry_url, {
	tags: {
		git_commit: 'asoihaerg21849', 
		userLevel: "editor"
	}
}).install();

logException(new Error('download failed!'), {
  email: 'wesbos@gmail.com'
}); //valuable information 

Raven.captureMessage('something bad happened');

Raven.showReportDialog(); //gives user feedback with information 

//console.log(window.doesNotExist.nope); //create error


const router = (
 <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={App}> 
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
 </Provider> 
)
render(router, document.getElementById('root'))