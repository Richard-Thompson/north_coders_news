/* eslint-env node, mocha, chai */
import {expect} from 'chai';
import commentsReducer from '../src/reducer/comments.reducer';
import * as actions from '../src/actions/actions';

describe('comments.reducer', function () {
  it('handles FETCH_COMMENTS_REQUESTS', function () {
    const action = actions.fetchCommentsRequest();
    const initialState = {
      loading: false
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_COMMENTS_SUCCESS', function () {
    const action = actions.fetchCommentsSuccess('comment');
    const initialState = {
      loading: true,
      comments: []
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: false,
      comments:['comment']
    };
    expect(actual).to.eql(expected);
    expect(expected.comments).to.not.equal(initialState.comments);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_COMMENTS_ERROR', function () {
    const action = actions.fetchCommentsError('error');
    const initialState = {
      loading: true,
      error: null
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });

  it('handles VOTE_COMMENT_REQUESTS', function () {
    const action = actions.commentVoteRequest();
    const initialState = {
      loading: false
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_COMMENT_SUCCESS UP', function () {
    const action = actions.commentVoteSuccess(1, '?vote=up');
    const initialState = {
      loading: true,
      comments: [{_id:1, votes: 2}]
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: false,
      comments: [{_id:1, votes: 3}]
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_COMMENT_SUCCESS DOWN', function () {
    const action = actions.commentVoteSuccess(1, '?vote=down');
    const initialState = {
      loading: true,
      comments:  [{_id:1, votes: 3}]
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: false,
      comments:  [{_id:1, votes: 2}]
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_COMMENT_ERROR', function () {
    const action = actions.commentVoteError('error');
    const initialState = {
      loading: true,
      error: null
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });

  it('handles ADD_COMMENT_REQUESTS', function () {
    const action = actions.addCommentRequest();
    const initialState = {
      loading: false
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ADD_COMMENT_SUCCESS', function () {
    const action = actions.addCommentSuccess({_id: 2, comment: 'test'});
    const initialState = {
      loading: true,
      comments: [{_id: 1, comment: 'hello'}]
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: false,
      comments: [{_id: 1, comment: 'hello'}, {_id: 2, comment: 'test'}]
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ADD_COMMENT_ERROR', function () {
    const action = actions.addCommentError('error');
    const initialState = {
      loading: true,
      error: null
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });

});