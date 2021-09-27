import React, { useState, useEffect } from "react";
import CommentElement from "./CommentElement";

const commentsDummyData = [
  {
    post_id: 1,
    user: ["fan1", "fan2", "fan3", "fan4"],
    content: ["남주혁 존잘!", "사진 너무 예쁘다", "워후~~~~", "캬~ 잘생겼구만"],
  },
  {
    post_id: 2,
    user: ["dailylooks_"],
    content: ["구매 각🤑"],
  },
  {
    post_id: 3,
    user: ["dailylooks_", "ootdfashion"],
    content: ["I love polo sweaterssssssss 💘💘", "they look so cute!!"],
  },
  {
    post_id: 4,
    user: ["dailylooks_", "todaystyless"],
    content: ["so pretty", "dm plz"],
  },
];

const Comments = (props) => {
  // numOfComment 변수는 commentsInfo 객체 갯수로 값 초기화
  const [commentsInfo, setCommentsInfo] = useState(
    commentsDummyData[props.id - 1]
  ); // 해당 게시글의 댓글 객체를 id를 이용해서 찾아서 저장
  const numOfComments = commentsInfo.content.length; // 댓글의 갯수

  useEffect(() => {
    // 댓글 수 3개 이상부터 더보기 버튼 보이기
    if (numOfComments <= 2)
      document.getElementById("more-comments-button" + props.id).style.display =
        "none";
  }, [numOfComments]);

  return (
    <section>
      <button
        className="more-comments-button"
        id={"more-comments-button" + props.id}
      >
        댓글 {numOfComments}개 모두 보기
      </button>
      <ul className="comments-box">
        {numOfComments >= 2 && (
          <CommentElement
            username={commentsInfo.user[numOfComments - 2]}
            cont={commentsInfo.content[numOfComments - 2]}
          />
        )}
        <CommentElement
          username={commentsInfo.user[numOfComments - 1]}
          cont={commentsInfo.content[numOfComments - 1]}
        />
      </ul>
    </section>
  );
};

export default Comments;
