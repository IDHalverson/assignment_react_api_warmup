import React from "react";
import Showable from "./elements/Showable";

// Custom card component for each user's data
const UserCard = ({
  user,
  onDeleteUser,
  onEditUser,
  onEditClick,
  editMode
}) => {
  const { first_name, last_name, avatar, id } = user;

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
        <button onClick={onDeleteUser} className="btn btn-danger" value={id}>
          Delete
        </button>
        <Showable show={editMode}>
          <form className="form" onSubmit={onEditUser}>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input defaultValue={first_name} type="text" name="first_name" />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input defaultValue={last_name} type="text" name="last_name" />
            </div>
            <div className="form-group">
              <label htmlFor="avatar">Avatar</label>
              <input defaultValue={avatar} type="text" name="avatar" />
            </div>
            <input type="hidden" value={id} name="id" />

            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </form>
        </Showable>
        <Showable show={!editMode}>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onEditClick}
          >
            Edit
          </button>
        </Showable>
      </div>
    </div>
  );
};

export default UserCard;
