import React from 'react';
import {connect} from 'react-redux';
import {fetchTopicArticles} from '../actions/actions';

import ArticleCard from './ArticleCard';


const TopicArticleList = React.createClass({

componentDidMount () {   
    this.props.getTopicArticles(this.props.params.topic);

},

componentWillReceiveProps (nextProps) {
   if (this.props.params.topic !== nextProps.params.topic) {
     this.props.getTopicArticles(nextProps.params.topic);
     console.log('it works');
   }
 },
render () {
   
    return (
        <div>
            {this.props.articles.map(function (article, i) {
                return <ArticleCard 
                            id={article._id}
                            title={article.title} 
                            votes={article.votes} 
                            created_by={article.created_by} 
                            key={i}
                            comments={article.comments}
                        />;
            })}
        </div>
    );
},

});

function mapDispatchToProps (dispatch) {
    return {
        getTopicArticles: (topic) => {
            dispatch(fetchTopicArticles(topic));
        }
    };
}

function mapStateToProps (state) {
    
    return {
        articles: state.articles.articles
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicArticleList);