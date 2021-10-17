import React, { useState } from "react";
import CommentElement from "./CommentElement";
import NewComment from "./NewComment";

import "./Comments.css";

// const commentsData = [
//   {
//     postId: 1,
//     data: [
//       { userId: "fan1", content: "남주혁 존잘" },
//       { userId: "fan2", content: "사진 너무 예쁘다" },
//       { userId: "fan3", content: "워후~~~~" },
//       { userId: "fan4", content: "pretty boy <3<3" },
//     ],
//   },
//   {
//     postId: 2,
//     data: [{ userId: "dailylooks_", content: "구매 각🤑" }],
//   },
//   {
//     postId: 3,
//     data: [
//       { userId: "dailylooks_", content: "I love polo sweaterssssssss 💘💘" },
//       { userId: "ootdfashion", content: "they look so cute!!" },
//     ],
//   },
//   {
//     postId: 4,
//     data: [
//       { userId: "dailylooks_", content: "so pretty" },
//       { userId: "todaystyless", content: "dm plz" },
//     ],
//   },
// ];

const Comments = (props) => {
  // numOfComment 변수는 commentsInfo 객체 갯수로 값 초기화
  const [commentsInfo, setCommentsInfo] = useState(props.commentsData);
  // const numOfComments = commentsInfo.length; // 댓글의 갯수

  const postedTime = "1시간 전"; // 나중에 현재 시간 기준으로 db에 있는 포스트 등록 시간 뺀 결과로 초기화

  // useEffect(() => {
  //   // 댓글 수 3개 이상부터 더보기 버튼 보이기
  //   if (numOfComments <= 2)
  //     document.getElementById(
  //       "more-comments-button" + commentsData.id
  //     ).style.display = "none";
  // }, [numOfComments]);

  const addCommentHandler = (content) => {
    setCommentsInfo((prevState) => {
      const timeNow = Date.now();
      return [...prevState, { ...content, id: content.username + timeNow }];
    });
  };

  const deleteCommentHandler = (id) => {
    setCommentsInfo((prevState) => {
      return prevState.filter((comment) => comment.id !== id);
    });
  };

  return (
    <>
      <section>
        {/* <button
          className="more-comments-button"
          id={"more-comments-button" + commentsData.id}
        >
          댓글 {numOfComments}개 모두 보기
        </button> */}
        <ul className="comments-box">
          {commentsInfo.map((comment) => {
            return (
              <CommentElement
                key={comment.id}
                id={comment.id}
                username={comment.username}
                cont={comment.content}
                onDelete={deleteCommentHandler}
              />
            );
          })}
        </ul>
      </section>
      <div
        style={{
          color: "#8e8e8e",
          fontSize: "10px",
          padding: "0 16px",
          margin: "6px 0",
        }}
      >
        {postedTime}
      </div>
      <NewComment
        id={props.id}
        addComment={addCommentHandler}
        commentInputRef={props.commentInputRef}
      />
    </>
  );
};

export default Comments;
