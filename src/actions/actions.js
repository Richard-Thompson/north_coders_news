import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config.js';

export function fetchAllArticles () {
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(function (res) {
                dispatch(fetchArticlesSuccess(res.data.articles));
            })
            .catch(function (err) {
                dispatch(fetchArticlesError(err));
            });
    };
}

export function fetchArticlesRequest () {
    return {type: types.FETCH_ARTICLES_REQUEST};
}
export function fetchArticlesSuccess (articles) {
    return {type: types.FETCH_ARTICLES_SUCCESS, data: articles};
}
export function fetchArticlesError (err) {
    return {type: types.FETCH_ARTICLES_ERROR, data: err};
}

export function fetchTopicArticles (topic) {
    return function (dispatch) {
        dispatch(fetchTopicArticlesRequest());
        axios
            .get(`${ROOT}/topics/${topic}`)
            .then(function (res) {
                dispatch(fetchTopicArticlesSuccess(res.data.articles));
            })
            .catch(function (err) {
                dispatch(fetchTopicArticlesError(err));
            });
    };
}

export function fetchTopicArticlesRequest () {
    return {type: types.FETCH_TOPIC_ARTICLES_REQUEST};
}
export function fetchTopicArticlesSuccess (articles) {
    return {type: types.FETCH_TOPIC_ARTICLES_SUCCESS, data: articles};
}
export function fetchTopicArticlesError (err) {
    return {type: types.FETCH_TOPIC_ARTICLES_ERROR, data: err};
}

export function articleVote (articleId, upOrDown) {
    return function (dispatch) {
        dispatch(articleVoteRequest());
        axios
            .put(`${ROOT}/articles/${articleId}${upOrDown}`)
            .then(function () {
                dispatch(articleVoteSuccess(articleId, upOrDown));
            })
            .catch(function (err) {
                console.log(err);
                dispatch(articleVoteError(err));
            });
    };
}
export function articleVoteRequest () {
    return {type: types.ARTICLE_VOTE_REQUEST};
}
export function articleVoteSuccess (articleId, vote) {
    return {type: types.ARTICLE_VOTE_SUCCESS, articleId: articleId, vote: vote};
}
export function articleVoteError (err) {
    return {type: types.ARTICLE_VOTE_ERROR, data: err};
}

export function fetchArticle (articleId) {
    return function (dispatch) {
        dispatch(fetchArticleRequest());
        axios
            .get(`${ROOT}/articles/${articleId}`)
            .then(function (res) {
                dispatch(fetchArticleSuccess(res.data));
            })
            .catch(function (err) {
                console.log(err);
                dispatch(fetchArticleError(err));
            });

    };
}

export function fetchArticleRequest () {
    return {type: types.FETCH_ARTICLE_REQUEST};
}

export function fetchArticleSuccess (article) {
    return {type: types.FETCH_ARTICLE_SUCCESS, data: article};
}

export function fetchArticleError (err) {
    return {type: types.FETCH_ARTICLE_ERROR, data: err};
}

export function fetchComments (articleId) {
    return function (dispatch) {
        dispatch(fetchCommentsRequest());
        axios
            .get(`${ROOT}/articles/${articleId}/comments`)
            .then(function (res) {
                dispatch(fetchCommentsSuccess(res.data.comments));
            })
            .catch(function (err) {
                console.log(err);
                dispatch(fetchCommentsError(err));
            });
    };

}
export function fetchCommentsRequest () {
    return {type: types.FETCH_COMMENTS_REQUEST};
}

export function fetchCommentsSuccess (comments) {
    return {type: types.FETCH_COMMENTS_SUCCESS, data: comments};
}

export function fetchCommentsError (err) {
    return {type: types.FETCH_COMMENTS_ERROR, data: err};
}

export function commentVote (commentId, upOrDown, articleId) {
    return function (dispatch) {
        dispatch(commentVoteRequest());
        axios
            .put(`${ROOT}/comments/${commentId}${upOrDown}`)
            .then(function () {
                dispatch(commentVoteSuccess(commentId, upOrDown));
            })
            .then(function () {
                dispatch(fetchComments(articleId));
            })
            .catch(function (err) {
                console.log(err);
                dispatch(commentVoteError(err));
            });
    };
}
export function commentVoteRequest () {
    return {type: types.COMMENT_VOTE_REQUEST};
}
export function commentVoteSuccess (commentId, vote) {
    return {type: types.COMMENT_VOTE_SUCCESS, commentId: commentId, vote: vote};
}
export function commentVoteError (err) {
    return {type: types.COMMENT_VOTE_ERROR, data: err};
}

export function addComment (article_id, comment) {
   
    return function (dispatch) {
        dispatch(addCommentRequest());
        axios
            .post(`${ROOT}/articles/${article_id}/comments`, {comment: comment})
            .then(function (res) {
               
                dispatch(addCommentSuccess(res.data.body.comment));
            })
            .then(function () {
                dispatch(fetchComments(article_id));
            })
            .catch(function (error) {
                dispatch(addCommentError(error));
            });
    };
}

export function addCommentRequest () {
    return {type: types.ADD_COMMENT_REQUEST};
}

export function addCommentSuccess (comment) {
    return {type: types.ADD_COMMENT_SUCCESS, data: comment};
}

export function addCommentError (error) {
    return {type: types.ADD_COMMENT_ERROR, data: error};
}
