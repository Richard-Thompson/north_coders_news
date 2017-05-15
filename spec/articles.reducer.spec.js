import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import articlesReducer from '../src/reducer/articles.reducer';

describe('articles.reducer', () => {
  it('handles FETCH_ARTICLES_REQUESTS', () => {
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

  it('handles FETCH_ARTICLES_SUCCESS', () => {
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

  it('handles FETCH_ARTICLES_ERROR', () => {
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

  it('handles FETCH_TOPIC_ARTICLES_REQUEST', () => {
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

  it('handles FETCH_TOPIC_ARTICLES_SUCCESS', () => {
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

  it('handles FETCH_TOPIC_ARTICLES_ERROR', () => {
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

   it('handles FETCH_ARTICLE_REQUEST', () => {
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

  it('handles FETCH_ARTICLE_SUCCESS', () => {
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

  it('handles FETCH_ARTICLE_ERROR', () => {
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

   
  it('handles ARTICLE_VOTE_REQUESTS', () => {
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

  it('handles ARTICLE_VOTE_SUCCESS', () => {
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

  it('handles ARTICLE_VOTE_ERROR', () => {
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
