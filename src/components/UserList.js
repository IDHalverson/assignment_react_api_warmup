// UserList.js
import React, { Component } from "react";
import UserCard from "./UserCard";

// components/UserList.js

// Convert to a functional component and use props
// instead of state for users and isFetching
const UserList = ({ users, isFetching }) => {
  const userList = users.map(user => <UserCard user={user} key={user.id} />);

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  );
};

export default UserList;
