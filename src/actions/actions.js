import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config.js';

export function fetchAllArticles(){
    return function (dispatch){
        dispatch(fetchArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(function (res){
                dispatch(fetchArticlesSuccess(res.data.articles));
                console.log(res.data.articles);
            })
            .catch(function (err){
                dispatch(fetchArticlesError(err));
            });
    };
}

export function fetchArticlesRequest (){
    return{
        type: types.FETCH_ARTICLES_REQUEST,
    }
}
export function fetchArticlesSuccess (articles){
    return{
        type: types.FETCH_ARTICLES_SUCCESS,
        data: articles
    }
}
export function fetchArticlesError (err){
    return{
        type:types.FETCH_ARTICLES_ERROR,
        data:err
    }
}

export function fetchTopicArticles(topic){
    return function (dispatch){
        dispatch(fetchTopicArticlesRequest());
        axios
            .get(`${ROOT}/topics/${topic}/articles`)
            .then(function (res){
                dispatch(fetchTopicArticlesSuccess(res.data.articles));
            })
            .catch(function (err){
                dispatch(fetchTopicArticlesError(err));
            });
    };
}

export function fetchTopicArticlesRequest (){
    return{
        type: types.FETCH_TOPIC_ARTICLES_REQUEST,
    }
}
export function fetchTopicArticlesSuccess (articles){
    return{
        type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
        data: articles
    }
}
export function fetchTopicArticlesError (err){
    return{
        type:types.FETCH_TOPIC_ARTICLES_ERROR,
        data:err
    }
}

export function fetchArticle(ID){
    return function (dispatch){
        dispatch(fetchArticleRequest());
        axios
            .get(`${ROOT}/topics/${topic}/articles`)
            .then(function (res){
                dispatch(fetchTopicArticlesSuccess(res.data.articles));
            })
            .catch(function (err){
                dispatch(fetchTopicArticlesError(err));
            });
    };
}