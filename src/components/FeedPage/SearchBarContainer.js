import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const usernameList = [
  {
    id: 1,
    username: "bokjiho",
    introText: "복지호",
  },
  {
    id: 6,
    username: "user1",
    introText: "반가워요",
  },
  {
    id: 7,
    username: "user2",
    introText: "hi",
  },
  {
    id: 8,
    username: "user3",
    introText: "🖐",
  },
  {
    id: 5,
    username: "user4",
    introText: ".",
  },
  {
    id: 2,
    username: "poloralphlauren",
    introText: "Polo Ralph Lauren",
  },
  {
    id: 3,
    username: "skawngur",
    introText: "남주혁",
  },
  {
    id: 4,
    username: "drmartenskr",
    introText: "Dr.Martens Korea",
  },
  {
    id: 9,
    username: "dailylooks_",
    introText: "My dailylooks",
  },
  {
    id: 10,
    username: "todaystyless",
    introText: "👓👕👖👜",
  },
  {
    id: 11,
    username: "ootdfashion",
    introText: "Outfit Of The Day",
  },
  {
    id: 12,
    username: "fan1",
    introText: "fan1",
  },
  {
    id: 13,
    username: "fan2",
    introText: "fan2",
  },
  {
    id: 14,
    username: "fan3",
    introText: "fan3",
  },
  {
    id: 15,
    username: "fan4",
    introText: "fan4",
  },
];

const SearchBarContainer = (props) => {
  const [searchResult, setSearchResult] = useState(usernameList);

  // 아이디 검색 일치하는 문자열 확인 함수
  const findMatch = (wordToMatch) => {
    const regex = new RegExp(wordToMatch, "gi");
    return usernameList.filter((ul) => ul.username.match(regex));
  };
  useEffect(() => {
    const newMatch = findMatch(props.searchInput);
    setSearchResult(newMatch);
  }, [props.searchInput]);

  return (
    <div className="search-container">
      <ul className="search-list">
        <h4>최근 검색 항목</h4>
        {searchResult.map((user) => {
          return (
            <li key={user.id}>
              <UserProfile
                id={user.id}
                className="searched-profile"
                userId={user.username}
                size="44"
              />
              <span className="my-userid">
                <div style={{ fontWeight: 600, cursor: "pointer" }}>
                  {user.username}
                </div>
                <div style={{ color: "#8e8e8e" }}>{user.introText}</div>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBarContainer;
