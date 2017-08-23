import React from "react";

// Custom card component for each user's data
const UserCard = ({ user, onDeleteUser, onEditUser }) => {
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
        <form className="form">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" name="avatar" />
          </div>
          <input type="hidden" value={first_name + last_name} name="id" />

          <button onClick={onEditUser} className="btn btn-primary">Edit</button>
        </form>

      </div>
    </div>
  );
};

export default UserCard;
