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
       {this.props.articles.map(function (article, i) {
         return <ArticleCard 
         id={article._id}
         title={article.title} 
         votes={article.votes} 
         created_by={article.created_by} 
         key={i}
         comments={article.comments}
          />
       })}
      </div>
    );1
  }
});

function mapDispatchToProps (dispatch){
  return{
    getArticles: ()=>{
      dispatch(fetchAllArticles());
    }
  }
}

function mapStateToProps (state){
  console.log(state);
  return{
    articles: state.articles
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList) 