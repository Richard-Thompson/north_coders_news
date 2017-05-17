import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';
import {articleVote} from '../actions/actions';

import ArticleCard from './ArticleCard';


const ArticleList = React.createClass({

componentDidMount (){
    this.props.getAllArticles()


},

render (){
    return(
        <div className="is-mobile">
            {this.props.articles.map((article, i) => {
                return <ArticleCard 
                            id={article._id}
                            title={article.title} 
                            votes={article.votes} 
                            created_by={article.created_by} 
                            key={i}
                            comments={article.comments}
                            voteUpdate={this.props.voteUpdate}
                        />
            })};
        </div>
    );
},

})

function mapDispatchToProps (dispatch){
    return{
        getAllArticles: ()=>{
            dispatch(fetchAllArticles());
        },
         voteUpdate: (articleId,upOrDown)=>{
            dispatch(articleVote(articleId,upOrDown));
           
        }
    }
}

function mapStateToProps (state){
    
    return{
        articles: state.articles.articles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);