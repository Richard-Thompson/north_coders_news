import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';


const Article = React.createClass({

render (){
    return(
        <div>
            <p> Article</p>
        </div>
    );
}
});

export default Article;