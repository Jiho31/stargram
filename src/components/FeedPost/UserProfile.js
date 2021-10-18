import React from "react";

const UserProfile = (props) => {
  return (
    <span
      className={props.className}
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
    >
      <div className="profile-img">
        <img
          src={require("../../images/profile_" + props.userId + ".jpg")}
          alt={props.userId + "님의 프로필 사진"}
        />
      </div>
    </span>
  );
};

export default UserProfile;
