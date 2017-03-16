import * as types from '../actions/types';

const initialState = {
  articles: [],
  loading: false,
  error: null
};

function reducer (prevState = initialState, action) {
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

  return newState;
}

export default reducer;
