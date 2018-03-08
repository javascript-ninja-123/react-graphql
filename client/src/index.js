import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {createEpicMiddleware} from 'redux-observable';
//appoli
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';



import APP from './components/App';
import Songlist from './components/SongList/SongList';
import CreateNewSong from './components/CreateSong/CreateSong';
import SongDetail from './components/SongDetail/SongDetail';
import reducers from './reducers';


import rootEpic from './epics';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
})
const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(thunk,middleware,epicMiddleware)
  )
)


ReactDOM.render(
  <ApolloProvider  client={client}>
    <ConnectedRouter history={history} store={store}>
      <div>
        <Switch>
          <Route path='/detail/:id' component={SongDetail}/>
          <Route path='/create' component={CreateNewSong}/>
          <Route path='/' component={Songlist}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </ApolloProvider>
  , document.getElementById('root'));
