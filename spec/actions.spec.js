import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import {expect} from 'chai'; 

describe('actions.fetchArticlesRequest', function () {
    it('returns the expected action', function () {
        const action = actions.fetchArticlesRequest(item);
        expect(action).to.eql({
            type: types.FETCH_ARTICLES_REQUEST,
            item: item
        }); 
    });
});

describe('actions.fetchArticleSuccess', function () {
    it('returns the expected action', function () {
        const action = actions.fetchArticlesSuccess(data);
        expect(action).to.eql({
            type: types.FETCH_ARTICLES_SUCCESS,
            data:data 
        });
    });
});

describe('actions.fetchArticlesError', function () {
    it('returns the expected action', function () {
        const action = actions.fetchArticlesError(err);
        expect(action).to.eql({
            type: types.FETCH_ARTICLES_ERROR,
            data:err
        });
    });
});
