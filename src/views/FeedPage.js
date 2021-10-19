import React, { Component, useState, useEffect } from "react";
import FeedPost from "../components/FeedPage/FeedPost";
import NavigationBar from "../components/FeedPage/NavigationBar";
import "./FeedPage.css";
import feedPostData from "../feed-post-data";

class StoryContent extends Component {
  // const profileImagePath = this.props.uimagepath;

  render() {
    return (
      <span style={{ width: "80px" }}>
        <div style={{ width: "56px", height: "56px" }}>
          <a className="profile-img">
            <img src={this.props.profileImagePath} alt="" />
          </a>
        </div>
        <div className="story-user-id">{this.props.uid}</div>
      </span>
    );
  }
}

class MyProfile extends Component {
  render() {
    return (
      <section className="my-profile">
        <span style={{ width: "56px", height: "56px" }}>
          <a className="profile-img">
            <img
              alt="my profile image"
              src={require("../images/profile_default.jpg")}
            />
          </a>
        </span>
        <span className="my-userid" style={{ width: "187px" }}>
          <div style={{ fontWeight: 600, cursor: "pointer" }}>bokjiho</div>
          <div style={{ color: "#8e8e8e" }}>소개입니다</div>
        </span>
        <span>
          <button
            style={{
              fontSize: "12px",
              color: "#0095f6",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            전환
          </button>
        </span>
      </section>
    );
  }
}

class UserProfile extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "8px 0",
          }}
        >
          <span style={{ width: "32px", height: "32px" }}>
            <a className="profile-img">
              <img
                alt={this.props.userId + "님의 프로필 사진"}
                src={require("../images/profile_default.jpg")}
              />
            </a>
          </span>
          <span className="my-userid" style={{ width: "201px" }}>
            <div style={{ fontWeight: 600, cursor: "pointer" }}>
              {this.props.userid}
            </div>
            <div style={{ color: "#8e8e8e", fontSize: "12px" }}>인기</div>
          </span>
          <span>
            <button
              style={{
                fontSize: "12px",
                color: "#0095f6",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              팔로우
            </button>
          </span>
        </div>
      </>
    );
  }
}

class Recommendations extends Component {
  render() {
    const Users = ["user1", "user2", "user3", "user4", "user5"];
    const RecommendedUser = [];

    for (const [index, value] of Users.entries()) {
      RecommendedUser.push(<UserProfile key={index} userid={value} />);
    }

    return (
      <section>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h5
            style={{
              color: "#8e8e8e",
              fontSize: "14px",
              fontWeight: 600,
              display: "inline-block",
              margin: "10px 0",
            }}
          >
            회원님을 위한 추천
          </h5>
          <button
            style={{ color: "#262626", fontSize: "12px", fontWeight: 600 }}
          >
            모두 보기
          </button>
        </div>
        {RecommendedUser}
      </section>
    );
  }
}

const FeedPage = () => {
  const [postItems, setPostItems] = useState(feedPostData.slice(0, 5));
  const [loadedPostLength, setLoadedPostLength] = useState(5);

  // 무한 스크롤
  useEffect(() => {
    window.onscroll = () => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      let scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      let clientHeight = document.documentElement.clientHeight;

      if (
        scrollTop + clientHeight + 10 >= scrollHeight &&
        loadedPostLength < 16
      ) {
        setPostItems([
          ...postItems,
          ...feedPostData.slice(loadedPostLength, loadedPostLength + 2),
        ]);
        setLoadedPostLength((prev) => prev + 2);
      }
    };
  });

  return (
    <>
      <NavigationBar />
      <div className="feed-body">
        <main className="main-body">
          <section className="story-box"></section>
          <section className="feed-content">
            {postItems.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </section>
        </main>
        <aside className="side-body">
          <MyProfile />
          <Recommendations />
        </aside>
      </div>
    </>
  );
};

export default FeedPage;
