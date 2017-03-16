import React from 'react';
import ArticleCard from './ArticleCard';
import { connect } from 'react-redux';
import {fetchAllTopicArticles} from '../actions/actions';

const TopicArticleList = React.createClass({

    componentDidMount() {
        this.props.getArticles(this.props.params.topic);
        console.log(this.props)
    },
    render() {
        return (
            <div id='TopicArticleList'>
                {this.props.articles.map(function (article, i) {
                    return <ArticleCard
                        title={article.title}
                        votes={article.votes}
                        created_by={article.created_by}
                        key={i}
                        comments={article.comments}
                    />
                })}
            </div>
        );
    }
})

function mapDispatchToProps(dispatch) {
    return {
        getArticles: (topic) => {
            dispatch(fetchAllTopicArticles(topic));
        }
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        articles: state.articles
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TopicArticleList)
