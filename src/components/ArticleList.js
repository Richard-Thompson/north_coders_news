import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';

import ArticleCard from './ArticleCard';


const ArticleList = React.createClass({

componentDidMount (){
    this.props.getAllArticles()


},

render (){
    return(
        <div>
            {this.props.articles.map(function (article, i) {
                return <ArticleCard 
                            id={article._id}
                            title={article.title} 
                            votes={article.votes} 
                            created_by={article.created_by} 
                            key={i}
                            comments={article.comments}
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
        }
    }
}``

function mapStateToProps (state){
    
    return{
        articles: state.articles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);