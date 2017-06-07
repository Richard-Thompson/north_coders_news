import React from 'react';

const PostCommentForm = (props) => {
  return (
    <article className="media box form posting-comments">
      <form className="media-content" onSubmit={props.submitHandler}>
        <textarea
          className="textarea"
          placeholder="new comment"
          value={props.input}
          onChange={props.inputHandler}/>
        <button
          className="button is-success is-pulled-right post-button"
          type="submit"
          value="post">Post comment
        </button>
      </form>
    </article>
  );
};

export default PostCommentForm;