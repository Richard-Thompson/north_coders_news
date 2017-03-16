import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';
import ArticleCard from './ArticleCard';
const ArticleList = React.createClass({

  componentDidMount (){
    this.props.getArticles();
  },

  render () {
    return (
      <div id='ArticleList'>
       All articles here.
       <ArticleCard />
      </div>
    );
  }
});

function mapDispatchToProps (dispatch){
  return{
    getArticles: ()=>{
      dispatch(fetchAllArticles());
    }
  }
}

function mapStateToProps (){
  return{
    articles: state.articles
  };
}

export default connect(null, mapDispatchToProps)(ArticleList) 