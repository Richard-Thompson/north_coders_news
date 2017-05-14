import React from 'react';
import {connect} from 'react-redux';
import {vote} from '../actions/actions';
import {PropTypes} from 'prop-types';
import CommentList from './CommentList';

import '../css/ArticleCard.css';

const ArticleCard = React.createClass({
    getInitialState () {
        return {
            displayComments: false
        };
    },

upVote: function () {
    this.props.voteUpdate(`${this.props.id}`, '?vote=up');
},

downVote: function () {
    this.props.voteUpdate(`${this.props.id}`, '?vote=down');
},

toggleDisplay: function () {
    this.setState(() => {
        return {
            displayComments: !this.state.displayComments
        };
    });
},

render () {
    return (
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
                        <p>
                            <strong>{this.props.created_by}</strong> 
                            <small>@johnsmith</small>
                            <br/>
                            <p onClick={this.toggleDisplay}>
                                {this.props.title}

                            </p>
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">
                                <span className="icon is-small"><i className="fa fa-reply"></i></span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small"><i className="fa fa-heart"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        {this.state.displayComments ? <CommentList articleId={this.props.id}/> : null}
        </div>
    );
}
});

function mapStateToProps (state) {
    
    return {
        articles: state.articles.articles,
        comments: state.comments.comments
    };
}

export default connect(mapStateToProps)(ArticleCard);
