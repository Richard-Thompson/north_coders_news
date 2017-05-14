import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/actions';
import Comment from './Comment';
const TopicArticleList = React.createClass({

componentDidMount (){
 this.props.fetchComments(this.props.articleId);
},

render (){
  //  if (!this.props.comments.length) return null;
  return(
        <div>
            {this.props.comments.map(function (article, i) {
                return <Comment
                            id={article._id}
                            title={article.title} 
                            votes={article.votes} 
                            created_by={article.created_by} 
                            key={i}
                            comments={article.comments}
                        />
            })}
        </div>
    );
},

})

function mapDispatchToProps (dispatch){
    return{
        fetchComments: (articleId)=>{
            dispatch(fetchComments(articleId));
        }
    }
}

function mapStateToProps (state){
    
    return{
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicArticleList);