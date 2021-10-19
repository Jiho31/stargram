import React from "react";
import UserProfile from "./UserProfile";

const SearchBarContainer = (props) => {
  return (
    <div className="search-container">
      <ul className="search-list">
        <h4>최근 검색 항목</h4>
        <li>
          <UserProfile
            className="searched-profile"
            userId="default"
            size="44"
          />
          <span className="my-userid">
            <div style={{ fontWeight: 600, cursor: "pointer" }}>bokjiho</div>
            <div style={{ color: "#8e8e8e" }}>소개입니다</div>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SearchBarContainer;
