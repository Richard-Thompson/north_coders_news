import React from 'react';
import {connect} from 'react-redux';
import {fetchArticle, addComment} from '../actions/actions';
import CommentList from './CommentList';
import PostCommentForm from './PostCommentForm';


const ArticlePage = React.createClass({

getInitialState () {
    return {
        input:''
    }
},

componentDidMount () {
   this.props.fetchArticle(this.props.params.article_id)
   
},
render (){
    return(
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                   {this.props.article.title}
                </h1>
                <h2 className="subtitle">
                    {this.props.article.belongs_to}
                </h2>
                </div>
            </div>
        </section>
        <div className="box">
            {this.props.article.body}
        </div>
        <PostCommentForm 
        inputHandler={this.inputHandler}
        submitHandler={this.submitHandler}
        input={this.state.input}
        />
        <CommentList 
        articleId={this.props.params.article_id}
        />
    </div>
    );
},

inputHandler (event) {
    let {value} = event.target;

    this.setState({
      input: value
    });
  },
  submitHandler (event) {
    event.preventDefault();

    let {article_id} = this.props.params.article_id;
    let {input} = this.state;

    this.props.addComment(article_id, input);

    this.setState({
        input:''
    });
  }
});



function mapDispatchToProps (dispatch) {
    return {
        fetchArticle:function (articleId) {
            dispatch(fetchArticle(articleId))
        },

        addComment: function (articleId, comment) {
            dispatch(addComment(articleId, comment));
        }
        }
    }


function mapStateToProps (state) {
    return {
        article: state.articles.article,
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);