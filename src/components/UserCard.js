// UserCard.js
import React from "react";

const UserCard = ({ user }) => {
  const { first_name, last_name, avatar } = user;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div className="UserCard card" style={{ maxWidth: `128px` }}>
      <img
        className="card-img-top img-fluid"
        src={user.avatar}
        alt="user avatar"
      />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
      </div>
    </div>
  );
};

export default UserCard;
