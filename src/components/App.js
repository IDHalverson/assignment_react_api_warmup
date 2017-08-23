// components/App.js
import React, { Component } from "react";
// Optionally add a reusable Jumbotron element
import UserList from "./UserList";

class App extends Component {
  // Move constructor and componentDidMount code to App.
  constructor() {
    super();
    this.state = {
      users: [],
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("https://reqres.in/api/users?delay=3")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  render() {
    // Send users and isFetching as props to UserList
    const { users, isFetching } = this.state;

    return (
      // ..
      <UserList users={users} isFetching={isFetching} />
      // ..
    );
  }
}

export default App;
