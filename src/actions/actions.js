import * as types from './types';
import axios from 'axios';
import ROOT from '../../config.js';

export function fetchAllArticles(){
    return function (dispatch){
        dispatch(fetchArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(function (res){
                dispatch(fetchArticlesSuccess(res.data));
            })
            .catch(function (err){
                dispatch(fetchArticlesError(err));
            });
    };
}

export function fetchArticlesRequest (item){
    return{
        type:types.FETCH_ARTICLES_REQUEST,
        item: item
    }
}
export function fetchArticlesSuccess (articles){
    return{
        type:types.FETCH_ARTICLES_SUCCESS,
        data: articles
    }
}
export function fetchArticlesError (err){
    return{
        type:types.FETCH_ARTICLES_ERROR,
        data:err
    }
}