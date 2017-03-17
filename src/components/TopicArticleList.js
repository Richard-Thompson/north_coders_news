import React from 'react';
import ArticleCard from './ArticleCard';
import { connect } from 'react-redux';
import {fetchTopicArticles} from '../actions/actions';

const TopicArticleList = React.createClass({

    componentDidMount() {
        this.props.getArticles(this.props.params.topic);
        console.log(this.props.params.topic)
       
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
            dispatch(fetchTopicArticles(topic));
        }
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TopicArticleList)
