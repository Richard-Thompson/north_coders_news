import React from 'react';
import {connect} from 'react-redux';
import {articleVote} from '../actions/actions';
import {Link} from 'react-router';


import '../css/ArticleCard.css';

const ArticleCard = React.createClass({
   
upVote: function () {
    this.props.voteUpdate(`${this.props.id}`, '?vote=up');
},

downVote: function () {
    this.props.voteUpdate(`${this.props.id}`, '?vote=down');
},

render () {
    return (
       <div className="box">
       <div className='vote-container'>
         <i onClick={this.upVote} className="fa fa-arrow-up" aria-hidden="true"></i>
            <div className='votes'>{this.props.votes}</div>
          <i onClick={this.downVote} className="fa fa-arrow-down" aria-hidden="true"></i>
       </div>
            <article className="media ">
                <div className="media-left">
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{this.props.created_by}</strong> 
                            <small>@johnsmith</small>
                            <br/>
                            <p>
                               <Link to={('/articles/'+this.props.id)}> {this.props.title}
                               </Link>
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
        </div>
    );
}
});

export default ArticleCard;