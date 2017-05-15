import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import {expect} from 'chai'; 
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('actions', function () {
  describe('fetchAllArticles', function () {
    it('Request: returns the expected action', function () {
      const action = actions.fetchArticlesRequest();
      expect(action).to.eql({
        type: types.FETCH_ARTICLES_REQUEST
      });
    });

    it('Sucess: returns the expected action', function () {
      const action = actions.fetchArticlesSuccess('articles');
      expect(action).to.eql({
        type: types.FETCH_ARTICLES_SUCCESS,
        data: 'articles'
      });
    });

    it('Error: returns the expected action', function () {
      const action = actions.fetchArticlesError({});
      expect(action).to.eql({
        type: types.FETCH_ARTICLES_ERROR,
        data: {}
      });
    });
  });

  describe('fetchTopicArticles', function () {
    it('Request: returns the expected action', function () {
      const action = actions.fetchTopicArticlesRequest();
      expect(action).to.eql({
        type: types.FETCH_TOPIC_ARTICLES_REQUEST
      });
    });

    it('Success: returns the expected action', function () {
      const action = actions.fetchTopicArticlesSuccess({});
      expect(action).to.eql({
        type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
        data: {}
      });
    });

    it('Error: returns the expected action', function () {
      const action = actions.fetchTopicArticlesError({});
      expect(action).to.eql({
        type: types.FETCH_TOPIC_ARTICLES_ERROR,
        data: {}
      });
    });
  });

    describe('articleVote', function () {
        it('Request: returns the expected action', function () {
        const action = actions.articleVoteRequest();
        expect(action).to.eql({
            type: types.ARTICLE_VOTE_REQUEST
        });
        });

        it('Success: returns the expected action', function () {
        const action = actions.articleVoteSuccess('articleId','vote');
        expect(action).to.eql({
            type: types.ARTICLE_VOTE_SUCCESS,
            articleId: 'articleId',
            vote: 'vote'
        });
        });

        it('Error: returns the expected action', function () {
        const action = actions.articleVoteError({});
        expect(action).to.eql({
            type: types.ARTICLE_VOTE_ERROR,
            data: {}
        });
        });
    });

    describe('fetchArticle', function () {
        it('Request: returns the expected action', function () {
        const action = actions.fetchArticleRequest();
        expect(action).to.eql({
            type: types.FETCH_ARTICLE_REQUEST
        });
        });

        it('Success: returns the expected action', function () {
        const action = actions.fetchArticleSuccess({});
        expect(action).to.eql({
            type: types.FETCH_ARTICLE_SUCCESS,
            data: {}
        });
        });

        it('Error: returns the expected action', function () {
        const action = actions.fetchArticleError({});
        expect(action).to.eql({
            type: types.FETCH_ARTICLE_ERROR,
            data: {}
        });
        });
    });

    describe('fetchComments', function () {
        it('Request: returns the expected action', function () {
        const action = actions.fetchCommentsRequest();
        expect(action).to.eql({
            type: types.FETCH_COMMENTS_REQUEST
        });
        });

        it('Success: returns the expected action', function () {
        const action = actions.fetchCommentsSuccess({});
        expect(action).to.eql({
            type: types.FETCH_COMMENTS_SUCCESS,
            data: {}
        });
        });

        it('Error: returns the expected action', function () {
        const action = actions.fetchCommentsError({});
        expect(action).to.eql({
            type: types.FETCH_COMMENTS_ERROR,
            data: {}
        });
        });
    });

      describe('commentVote', function () {
        it('Request: returns the expected action', function () {
        const action = actions.commentVoteRequest();
        expect(action).to.eql({
            type: types.COMMENT_VOTE_REQUEST
        });
        });

        it('Success: returns the expected action', function () {
        const action = actions.commentVoteSuccess('commentId','vote');
        expect(action).to.eql({
            type: types.COMMENT_VOTE_SUCCESS,
            commentId: 'commentId',
            vote: 'vote'
        });
        });

        it('Error: returns the expected action', function () {
        const action = actions.commentVoteError({});
        expect(action).to.eql({
            type: types.COMMENT_VOTE_ERROR,
            data: {}
        });
        });
    });

});
