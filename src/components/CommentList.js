import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/actions';
import {commentVote} from '../actions/actions';

import CommentCard from './CommentCard';

const CommentList = React.createClass({

componentDidMount () {
 this.props.fetchComments(this.props.articleId);
},

render () {
  //  if (!this.props.comments.length) return null;
  return (
                        
        <div>
            {this.props.comments.map((comment) => {
                return <CommentCard
                            id={comment._id}
                            articleId={comment.belongs_to}
                            comment={comment.body} 
                            user={comment.created_by}
                            created={comment.created_at} 
                            votes={comment.votes}
                            voteUpdate={this.props.voteUpdate}             
                        />;
            })}
        </div>
    );
}

});

function mapDispatchToProps (dispatch) {
    return {
        fetchComments:(articleId) => {
            dispatch(fetchComments(articleId));
        },
        voteUpdate: (commentId, upOrDown, articleId) => {
            dispatch(commentVote(commentId, upOrDown, articleId));
        }
    };
}

function mapStateToProps (state) {
    
    return {
        comments: state.comments.comments
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);