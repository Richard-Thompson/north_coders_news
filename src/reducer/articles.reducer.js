import * as types from '../actions/types';

const initialState = {
  articles: [],
  article:[],
  loading: false,
  error: null
};

function articlesReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if(action.type === types.FETCH_ARTICLES_REQUEST){
    newState.loading = true;

  }
  if(action.type === types.FETCH_ARTICLES_SUCCESS){
    newState.articles = action.data;
    newState.loading = false;
  }
  if(action.type === types.FETCH_ARTICLES_ERROR){
    newState.error = action.data;
    newState.loading = false;
  }


  if(action.type === types.FETCH_TOPIC_ARTICLES_REQUEST){
    newState.loading = true;

  }
  if(action.type === types.FETCH_TOPIC_ARTICLES_SUCCESS){
    newState.articles = action.data;
    newState.loading = false;
  }
  if(action.type === types.FETCH_TOPIC_ARTICLES_ERROR){
    newState.error = action.data;
    newState.loading = false;
  }

  if(action.type === types.FETCH_ARTICLE_REQUEST) {
    newState.loading = true;
  }

  if(action.type === types.FETCH_ARTICLE_SUCCESS) {
    newState.article = action.data;
    newState.loading = false;
  }

  if(action.type === types.FETCH_ARTICLE_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }


  if(action.type === types.ARTICLE_VOTE_REQUEST){
    newState.loading=true;
  }
  if(action.type === types.ARTICLE_VOTE_SUCCESS){
    newState.articles = newState.articles.map(article => {
           if (article._id === action.articleId) {
               if (action.vote === '?vote=up') {
                   article.votes++;
                   return article;
               } else {
                   article.votes--;
                   return article;
               }
           }
           return article;
       });
    
    
    newState.loading = false;
  }
  if(action.type === types.ARTICLE_VOTE_ERROR){
    newState.error = action.data;
    newState.loading = false;
  }
  
  return newState;
}

export default articlesReducer;
