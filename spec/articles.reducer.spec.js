/* eslint-env node, mocha, chai */
import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import articlesReducer from '../src/reducer/articles.reducer';

describe('articles.reducer', function () {
  it('handles FETCH_ARTICLES_REQUESTS', function () {
    const action = actions.fetchArticlesRequest();
    const initialState = {
      loading: false
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_ARTICLES_SUCCESS', function () {
    const action = actions.fetchArticlesSuccess('articles');
    const initialState = {
      loading: true,
      
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      articles: 'articles',
      
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_ARTICLES_ERROR', function () {
    const action = actions.fetchArticlesError('error');
    const initialState = {
      loading: true,
      error: null
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_TOPIC_ARTICLES_REQUEST', function () {
    const action = actions.fetchTopicArticlesRequest();
    const initialState = {
      loading: false
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_TOPIC_ARTICLES_SUCCESS', function () {
    const action = actions.fetchTopicArticlesSuccess('TopicArticles');
    const initialState = {
      loading: true,
     articles: {}
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      articles: 'TopicArticles'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_TOPIC_ARTICLES_ERROR', function () {
    const action = actions.fetchTopicArticlesError('error');
    const initialState = {
      loading: true,
      error: null
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

   it('handles FETCH_ARTICLE_REQUEST', function () {
    const action = actions.fetchArticleRequest();
    const initialState = {
      loading: false
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_ARTICLE_SUCCESS', function () {
    const action = actions.fetchArticleSuccess('Article');
    const initialState = {
      loading: true,
     article: {}
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      article: 'Article'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_ARTICLE_ERROR', function () {
    const action = actions.fetchArticleError('error');
    const initialState = {
      loading: true,
      error: null
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

   
  it('handles ARTICLE_VOTE_REQUESTS', function () {
    const action = actions.articleVoteRequest();
    const initialState = {
      loading: false
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ARTICLE_VOTE_SUCCESS', function () {
    const action = actions.articleVoteSuccess(1, '?vote=up');
    const initialState = {
      loading: true,
      articles: [{_id: 1, votes: 2}]
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      articles: [{_id: 1, votes: 3}]
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ARTICLE_VOTE_ERROR', function () {
    const action = actions.articleVoteError('error');
    const initialState = {
      loading: true,
      error: null
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });
});
