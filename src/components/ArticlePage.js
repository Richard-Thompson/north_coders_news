import React from 'react';
import CommentsList from './CommentsList';
import {connect} from 'react-redux';

const ArticlePage = React.createClass({
  componentDidMount(){
    if(props.article.length===0){
      this.props.getArticleData();
    }
  },
  render(){
      return (
        <div>
            <h1> Article Page </h1>
            <CommentsList />
        </div>
      )
  }
})

function mapDispatchToProps(dispatch){
  return{
    getArticleData:()=>{
      dispatch(fetchAllArticles())
    }
  }
}

function mapStateToProps(state, props) {
  // props.params.article_idq

  // const article = use that to find the correct article from state.articles
  
  const article =state.articles.filter(function (article){
  
   return article._id===props.params.article_id
  })
  
    return {
        article: article
    };
}

export default connect(mapStateToProps)(ArticlePage);
