import React from "react";

// Custom card component for each user's data
const UserCard = ({ user, onDeleteUser }) => {
  const { first_name, last_name, avatar } = user;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div className="UserCard card" style={{ maxWidth: "128px" }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
        <button
          onClick={onDeleteUser}
          className="btn btn-danger"
          value={first_name + last_name}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
