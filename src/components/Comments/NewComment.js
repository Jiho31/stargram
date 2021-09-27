import React, { useState, useEffect } from "react";

const NewComment = (props) => {
  const [commentInput, setCommentInput] = useState();

  useEffect(() => {
    document
      .getElementById("comment-input" + props.id)
      .addEventListener("change", (e) => {
        setCommentInput(e.target.value);
      });
  });

  useEffect(() => {
    document
      .getElementById("comment-form" + props.id)
      .addEventListener("submit", (e) => {
        e.preventDefault(); // 새로고침 방지

        // console.log(document.getElementById('comment-input' + props.id).value);
        alert(commentInput);
      });
  });

  return (
    <section className="new-comment">
      <form
        id={"comment-form" + props.id}
        style={{ width: "100%", height: "18px", display: "inherit" }}
      >
        <textarea
          id={"comment-input" + props.id}
          name="comment-input"
          placeholder="댓글 달기..."
          value={commentInput}
        ></textarea>
        <input
          type="submit"
          style={{
            background: "none",
            border: "none",
            font: "inherit",
            color: "#0095f6",
            fontWeight: 600,
            cursor: "pointer",
            marginLeft: "auto",
          }}
          value="게시"
        />
      </form>
    </section>
  );
};

export default NewComment;
