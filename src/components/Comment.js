import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/actions';

const Comment = React.createClass({
  

render (){
    return(
       <div className="box">
       <div className='vote-container'>
         <i className="fa fa-arrow-up" aria-hidden="true"></i>
            <div className='votes'>votes</div>
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
       </div>
            <article className="media">
                <div className="media-left">
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>created by</strong> 
                         <small>@johnsmith</small>
                        <br/>
                        title
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
})

export default Comment;