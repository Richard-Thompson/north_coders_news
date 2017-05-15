import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/bulma.css';
import './css/font-awesome.css';
import logger from 'redux-logger';

import combineReducers from './reducer/combinedReducers';
import App from './components/App';
import ArticleList from './components/ArticleList';
import TopicArticleList from './components/TopicArticleList';
import ArticlePage from './components/ArticlePage';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path='/' component={App}>
                      <IndexRoute component={ArticleList}/>
                      <Route path='/:topic/articles' component={TopicArticleList}/>
                      <Route path='/articles/:article_id' component={ArticlePage}/>
                    </Route>
                  </Router>
                </Provider>, document.getElementById('app'));
