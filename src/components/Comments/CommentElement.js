import React from "react";

const CommentElement = (props) => {
  const userName = props.username;
  const comment = props.cont;

  const deleteCommentHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li style={{ marginBottom: "4px", display: "flex" }}>
      <a href="#" className="user-id">
        {userName}
      </a>
      &nbsp;
      <span>{comment}</span>
      <span style={{ marginLeft: "auto" }}>
        <button
          className="delete-comment-button"
          onClick={deleteCommentHandler}
        ></button>
      </span>
    </li>
  );
};

export default CommentElement;
