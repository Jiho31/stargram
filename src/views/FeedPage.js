import React, { Component, useState, useEffect } from "react";
import FeedPost from "../components/FeedPost/FeedPost";
import "./FeedPage.css";

const MyInfo = [
  {
    id: "bokjiho",
    password: 123456,
    profileImage: "",
  },
];

const postDummy = [
  {
    id: 1,
    author: "poloralphlauren",
    profileImage: "../../images/profile_poloralphlauren.jpg",
    images: ["3.jpg", "3 (2).jpg", "3 (3).jpg"],
    text: "Holiday essentials for your loved ones.",
    likes: 20001,
    postedAt: "2020-12-17 20:30:00",
    commentsData: [
      {
        id: 1,
        username: "dailylooks_",
        content: "I love polo sweaterssssssss 💘💘",
      },
      { id: 2, username: "ootdfashion", content: "they look so cute!!" },
    ],
  },
  {
    id: 2,
    author: "poloralphlauren",
    profileImage: "../../images/profile_poloralphlauren.jpg",
    images: ["2.jpg"],
    text: "Timeless Style.",
    likes: 5432,
    postedAt: "2020-12-17 16:00:00",
    commentsData: [{ id: 1, username: "dailylooks_", content: "구매 각🤑" }],
  },
  {
    id: 3,
    author: "skawngur",
    profileImage: "../../images/profile_skawngur.jpg",
    images: ["1.jpg"],
    text: "어쩌고 저쩌고 랄랄라",
    likes: 123234229,
    postedAt: "2020-12-07 15:00:00",
    commentsData: [
      { id: 1, username: "fan1", content: "남주혁 존잘" },
      { id: 2, username: "fan2", content: "사진 너무 예쁘다" },
      { id: 3, username: "fan3", content: "워후~~~~" },
      { id: 4, username: "fan4", content: "pretty boy <3<3" },
    ],
  },
  {
    id: 4,
    author: "drmartenskr",
    profileImage: "../../images/profile_drmartenskr.jpg",
    images: ["4.jpg"],
    text: "💗💗💗",
    likes: 304,
    postedAt: "2020-12-17 22:50:00",
    commentsData: [
      { id: 1, username: "dailylooks_", content: "so pretty" },
      { id: 2, username: "todaystyless", content: "dm plz" },
    ],
  },
];

class FeedNav extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <section>
          <span className="stargram-logo">Stargram</span>
        </section>
        <section>
          <input className="search-input" placeholder="검색" />
        </section>
        <section>
          <div className="nav-icons"></div>
        </section>
      </nav>
    );
  }
}

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
              alt="profile image"
              src={require("../images/profile_default.jpg")}
            />
          </a>
        </span>
        <span className="my-userid" style={{ width: "187px" }}>
          <div style={{ fontWeight: 600, cursor: "pointer" }}>zl.ll07</div>
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

class SideBody extends Component {
  render() {
    return (
      <aside className="side-body">
        <MyProfile />
        <Recommendations />
      </aside>
    );
  }
}

class FeedBody extends Component {
  render() {
    return (
      <div className="feed-body">
        <main className="main-body">
          <section className="story-box"></section>
          <section className="feed-content">
            {postDummy.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </section>
        </main>
        {/* <SideBody /> */}
      </div>
    );
  }
}

const FeedPage = () => {
  const [postItems, setPostItems] = useState(postDummy);

  // 무한 스크롤
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.offsetHeight ===
        document.documentElement.scrollHeight
      ) {
        setPostItems([
          ...postItems,
          {
            id: postItems.length + 1,
            author: "skawngur",
            profileImage: "../images/profile_skawngur.jpg",
            images: ["1.jpg"],
            text: "어쩌고 저쩌고 랄랄라",
            likes: 0,
            postedAt: "2020-12-07 15:00:00",
            commentsData: [],
          },
        ]);
      }
    };
  });

  return (
    <>
      <FeedNav />
      <div className="feed-body">
        <main className="main-body">
          <section className="story-box"></section>
          <section className="feed-content">
            {postItems.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </section>
        </main>
        {/* <SideBody /> */}
      </div>
    </>
  );
};

export default FeedPage;
