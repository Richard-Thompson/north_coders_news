import React from 'react';
import {connect} from 'react-redux';
import {fetchArticle, addComment} from '../actions/actions';
import CommentList from './CommentList';
import PostCommentForm from './PostCommentForm';

const ArticlePage = React.createClass({

    getInitialState () {
        return {input: ''};
    },

    componentDidMount () {
        this.props.fetchArticle(this.props.params.article_id);
    },
    render () {
        return (
            
            <div>
                
                        
                <PostCommentForm
                    inputHandler={this.inputHandler}
                    submitHandler={this.submitHandler}
                    input={this.state.input}/>
               
                                
            </div>
        );
    },

    inputHandler (event) {
        let {value} = event.target;

        this.setState({input: value});
    },
    submitHandler (event) {
        event.preventDefault();

        let {article_id} = this.props.params.article_id;
        let {input} = this.state;

        this.props.addComment(article_id, input);

        this.setState({input: ''});
    }
});

function mapDispatchToProps (dispatch) {
    return {
        fetchArticle: function (articleId) {
            dispatch(fetchArticle(articleId));
        },

        addComment: function (articleId, comment) {
            dispatch(addComment(articleId, comment));
        }
    };
}

function mapStateToProps (state) {
        
    return {article: state.articles.article};
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);