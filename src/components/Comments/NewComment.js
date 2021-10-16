import React, { useState, useEffect } from "react";

const NewComment = (props) => {
  const [commentInput, setCommentInput] = useState();
  const [isValid, setIsValid] = useState(false);

  const commentInputChangeHandler = (e) => {
    setCommentInput(e.target.value);
  };

  useEffect(() => {
    if (commentInput && commentInput.trim() !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [commentInput]);

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // 1. 댓글 입력값 확인
    if (isValid) {
      // 2. 댓글 등록
      props.addComment({ username: "bokjiho", content: commentInput });

      // 3. 댓글 입력 칸 비우기
      setCommentInput("");
      setIsValid(false);
    }
  };

  // 댓글 입력칸에서 Enter 키 눌렀을 경우에 댓글 등록
  const keypressHandler = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      document.querySelector(`#submit-button${props.id}`).click();
    }
  };

  const validButton = (
    <button
      id={"submit-button" + props.id}
      type="submit"
      style={{ opacity: "1", cursor: "pointer" }}
    >
      게시
    </button>
  );
  const invalidButton = <button type="submit">게시</button>;

  return (
    <section className="new-comment">
      <form
        key={props.id}
        id={"comment-form" + props.id}
        onSubmit={formSubmissionHandler}
      >
        <textarea
          id={"comment-input" + props.id}
          name="comment-input"
          placeholder="댓글 달기..."
          value={commentInput}
          onChange={commentInputChangeHandler}
          onKeyDown={keypressHandler}
          ref={props.commentInputRef}
        ></textarea>
        {isValid ? validButton : invalidButton}
      </form>
    </section>
  );
};

export default NewComment;
