import React from 'react';

const CommentCard = React.createClass({
    upVote: function () {
        this.props.voteUpdate(`${this.props.id}`,'?vote=up',this.props.articleId);
         
    },

    downVote: function () {
        this.props.voteUpdate(`${this.props.id}`,'?vote=down', this.props.articleId);
        
        
    },

render (){
    return(
       <div className="box">
       <div className='vote-container'>
         <i onClick={this.upVote} className="fa fa-arrow-up" aria-hidden="true"></i>
            <div className='votes'>{this.props.votes}</div>
          <i onClick={this.downVote} className="fa fa-arrow-down" aria-hidden="true"></i>
       </div>
            <article className="media">
                <div className="media-left">
                </div>
                <div className="media-content">
                    <div className="content">
                         {this.props.comment}
                        <p>
                            <strong>Created By:</strong> 
                            <small>{" "+this.props.user}</small>
                            <br/>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
});

export default CommentCard;