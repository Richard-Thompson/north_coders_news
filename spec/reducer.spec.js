import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import reducer from '../src/reducer/articles.reducer';

describe('reducer', function () {
    const initialState = {
        articles: [],
        loading: false,
        error: null
    };

    describe('when passed action FETCH_ARTICLES_REQUEST', function () {
        it('does not mutate the initial state', function () {
            const action = actions.fetchArticlesRequest();
            const newState = reducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.not.equal(initialState.loading);
        });
        it('changes loading to true', function () {
            const action = actions.fetchArticlesRequest();
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                articles: [],
                loading: true,
                error: null
            })
        });
    });

    describe('when passed action FETCH_ARTICLES_SUCCESS', function () {
        it('does not mutate the initial state', function () {
            const action = actions.fetchArticlesSuccess();
            const newState = reducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.articles).to.not.equal(initialState.articles);
        });
        it('adds articles to the articles array', function () {
            const action = actions.fetchArticlesSuccess([1, 2, 3]);
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                articles: [1, 2, 3],
                loading: false,
                error: null
            })
        });
    });

    describe('when passed action FETCH_ARTICLES_ERROR', function () {
        it('does not mutate the initial state', function () {
            const action = actions.fetchArticlesError();
            const newState = reducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.error).to.not.equal(initialState.error);
        });
        it('error in state changes from null to the error', function () {
            const action = actions.fetchArticlesError('error');
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                articles: [],
                loading: false,
                error: 'error'
            })
        });
    });

    describe('when passed action FETCH_TOPIC_ARTICLES_REQUEST', function () {
        it('does not mutate the initial state', function () {
            const action = actions.fetchTopicArticlesRequest();
            const newState = reducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.not.equal(initialState.loading);
        });
        it('changes loading to true', function () {
            const action = actions.fetchTopicArticlesRequest();
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                articles: [],
                loading: true,
                error: null
            })
        });
    });

    describe('when passed action FETCH_TOPIC_ARTICLES_SUCCESS', function () {
        it('does not mutate the initial state', function () {
            const action = actions.fetchTopicArticlesSuccess();
            const newState = reducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.articles).to.not.equal(initialState.articles);
        });
        it('adds articles to the articles array', function () {
            const action = actions.fetchTopicArticlesSuccess([1, 2, 3]);
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                articles: [1, 2, 3],
                loading: false,
                error: null
            })
        });
    });

    describe('when passed action FETCH_TOPIC_ARTICLES_ERROR', function () {
        it('does not mutate the initial state', function () {
            const action = actions.fetchTopicArticlesError();
            const newState = reducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.error).to.not.equal(initialState.error);
        });
        it('error in state changes from null to the error', function () {
            const action = actions.fetchTopicArticlesError('error');
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                articles: [],
                loading: false,
                error: 'error'
            })
        });
    });

});
