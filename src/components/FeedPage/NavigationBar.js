import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import "./NavigationBar.css";
import SearchBarContainer from "./SearchBarContainer";

// Move to top of page on click (home icon)
const onHomeButtonClickHandler = (e) => {
  document.location.href = "#";
};

const NavigationBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [displayUserMenu, setDisplayUserMenu] = useState(false);

  // Display or hide search result on input focus/blur
  useEffect(() => {
    const searchBar = document.querySelector(".search-input");

    searchBar.addEventListener("focus", () => {
      setIsFocused(true);
    });
    searchBar.addEventListener("blur", () => {
      setIsFocused(false);
    });
  });

  const searchInputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  // Display and hide user menu when clicked outside of menu container
  useEffect(() => {
    document.body.addEventListener("click", () => {
      setDisplayUserMenu(false);
    });

    document
      .querySelector(".user-menu-container")
      .addEventListener("click", (e) => {
        e.stopPropagation();
      });

    document.querySelector(".logout-button").addEventListener("click", (e) => {
      localStorage.removeItem("isLogin");
      window.location.reload();
    });
  });

  const userIconClickHandler = () => {
    setDisplayUserMenu((prev) => !prev);
  };

  // const logoutHandler = () => {
  //   console.log("clicked");
  //   localStorage.removeItem("isLogin");
  //   window.location.reload();
  // };

  return (
    <div className="nav-bar-wrapper">
      <nav className="nav-bar">
        <section>
          <span className="stargram-logo">Stargram</span>
        </section>
        <section className="search-section">
          <input
            className="search-input"
            placeholder="검색"
            value={searchInput}
            onChange={searchInputChangeHandler}
          />
          {isFocused && <SearchBarContainer searchInput={searchInput} />}
        </section>
        <section className="nav-icons">
          <div>
            <button className="home-icon" onClick={onHomeButtonClickHandler}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M2397 5096 c-32 -13 -75 -36 -95 -50 -21 -14 -526 -515 -1124 -1113
-876 -878 -1091 -1098 -1112 -1140 -96 -194 -64 -406 83 -554 92 -91 209 -139
343 -139 l68 0 0 -800 c0 -541 4 -816 11 -852 38 -182 185 -347 367 -410 66
-23 71 -23 554 -23 476 0 487 0 514 21 15 11 37 33 48 48 21 27 21 40 26 695
l5 668 30 49 c38 61 115 110 189 119 28 4 168 5 311 3 l260 -3 53 -29 c50 -28
82 -61 113 -116 11 -21 15 -144 19 -692 5 -654 5 -667 26 -694 11 -15 33 -37
48 -48 27 -21 38 -21 514 -21 483 0 488 0 554 23 182 63 329 228 367 410 7 36
11 311 11 852 l0 800 68 0 c188 0 352 100 433 265 34 69 34 71 34 205 0 228
115 93 -1169 1376 -1276 1277 -1148 1167 -1366 1172 -113 2 -130 0 -183 -22z
m247 -286 c59 -28 2149 -2121 2171 -2172 21 -51 19 -94 -6 -144 -37 -77 -68
-88 -261 -94 -181 -5 -194 -9 -242 -74 -21 -27 -21 -38 -26 -934 l-5 -907 -28
-47 c-15 -26 -42 -59 -60 -72 -70 -54 -91 -56 -473 -56 l-354 0 0 560 c0 367
-4 577 -11 612 -39 188 -190 350 -384 411 -66 21 -88 22 -395 22 -358 0 -376
-2 -504 -67 -127 -64 -245 -222 -275 -366 -7 -35 -11 -245 -11 -612 l0 -560
-354 0 c-382 0 -403 2 -473 56 -18 13 -45 46 -60 72 l-28 47 -5 907 c-5 896
-5 907 -26 934 -48 65 -61 69 -242 74 -193 6 -224 17 -261 94 -25 50 -27 93
-6 144 21 50 2112 2143 2170 2172 51 25 98 25 149 0z"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div onClick={userIconClickHandler}>
            <UserProfile
              className="myprofile-icon"
              userId="bokjiho"
              size="24"
            />

            <section
              className={
                displayUserMenu
                  ? "user-menu-container"
                  : "hidden user-menu-container"
              }
            >
              <ul className="user-menu-list">
                <li className="menu-item">
                  <svg
                    aria-label="프로필"
                    color="#262626"
                    fill="#262626"
                    height="16"
                    role="img"
                    viewBox="0 0 32 32"
                    width="16"
                  >
                    <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                  </svg>
                  <div>프로필</div>
                </li>
                <li className="menu-item">
                  <svg
                    aria-label="설정"
                    color="#262626"
                    fill="#262626"
                    height="16"
                    role="img"
                    viewBox="0 0 32 32"
                    width="16"
                  >
                    <path d="M31.2 13.4l-1.4-.7c-.1 0-.2-.1-.2-.2v-.2c-.3-1.1-.7-2.1-1.3-3.1v-.1l-.2-.1v-.3l.5-1.5c.2-.5 0-1.1-.4-1.5l-1.9-1.9c-.4-.4-1-.5-1.5-.4l-1.5.5H23l-.1-.1h-.1c-1-.5-2-1-3.1-1.3h-.2c-.1 0-.1-.1-.2-.2L18.6.9c-.2-.5-.7-.9-1.2-.9h-2.7c-.5 0-1 .3-1.3.8l-.7 1.4c0 .1-.1.2-.2.2h-.2c-1.1.3-2.1.7-3.1 1.3h-.1l-.1.2h-.3l-1.5-.5c-.5-.2-1.1 0-1.5.4L3.8 5.7c-.4.4-.5 1-.4 1.5l.5 1.5v.5c-.5 1-1 2-1.3 3.1v.2c0 .1-.1.1-.2.2l-1.4.7c-.6.2-1 .7-1 1.2v2.7c0 .5.3 1 .8 1.3l1.4.7c.1 0 .2.1.2.2v.2c.3 1.1.7 2.1 1.3 3.1v.1l.2.1v.3l-.5 1.5c-.2.5 0 1.1.4 1.5l1.9 1.9c.3.3.6.4 1 .4.2 0 .3 0 .5-.1l1.5-.5H9l.1.1h.1c1 .5 2 1 3.1 1.3h.2c.1 0 .1.1.2.2l.7 1.4c.2.5.7.8 1.3.8h2.7c.5 0 1-.3 1.3-.8l.7-1.4c0-.1.1-.2.2-.2h.2c1.1-.3 2.1-.7 3.1-1.3h.1l.1-.1h.3l1.5.5c.1 0 .3.1.5.1.4 0 .7-.1 1-.4l1.9-1.9c.4-.4.5-1 .4-1.5l-.5-1.5V23l.1-.1v-.1c.5-1 1-2 1.3-3.1v-.2c0-.1.1-.1.2-.2l1.4-.7c.5-.2.8-.7.8-1.3v-2.7c0-.5-.4-1-.8-1.2zM16 27.1c-6.1 0-11.1-5-11.1-11.1S9.9 4.9 16 4.9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z"></path>
                  </svg>
                  <div>설정</div>
                </li>
                <li className="menu-item logout-button">
                  <div>로그아웃</div>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default NavigationBar;
