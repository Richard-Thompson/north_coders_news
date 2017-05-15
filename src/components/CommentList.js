import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/actions';
import Comment from './Comment';
const TopicArticleList = React.createClass({

componentDidMount () {
 this.props.fetchComments(this.props.articleId);
},

render () {
  //  if (!this.props.comments.length) return null;
  return (
        <div>
            {this.props.comments.map(function (comment, i) {
                return <Comment
                            id={comment._id}
                            articleId={comment.belongs_to}
                            comment={comment.body} 
                            user={comment.created_by}
                            created={comment.created_at} 
                            votes={comment.votes}
                        />;
            })}
        </div>
    );
},

});

function mapDispatchToProps (dispatch) {
    return {
        fetchComments: (articleId) => {
            dispatch(fetchComments(articleId));
        }
    };
}

function mapStateToProps (state) {
    
    return {
        comments: state.comments.comments
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicArticleList);