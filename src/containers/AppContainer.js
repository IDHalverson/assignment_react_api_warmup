import React, { Component } from "react";
import App from "../components/App";
import serialize from "form-serialize";

class AppContainer extends Component {
  constructor() {
    super();

    // Initialize users in state as an empty array and
    // set isFetching to false.
    this.state = {
      users: [],
      isFetching: false,
      error: null,
      editMode: false
    };
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    // After component mounts, call the API to get the
    // users, then update state which triggers re-render.
    // Add a delay to the URL and reset isFetching upon
    // completion of the request.
    fetch("https://reqres.in/api/users?delay=1")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  onAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });

    // Create headers to set the content type to json
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };

    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users", options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  onDeleteUser = e => {
    const target = e.target;
    const options = {
      method: "DELETE"
    };
    this.setState({ isFetching: true });
    fetch(`https://reqres.in/api/users${target.value}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const filteredUsers = this.state.users.filter(
          user => user.id.toString() !== target.value
        );
        this.setState({
          users: filteredUsers,
          isFetching: false
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isFetching: false
        });
      });
  };

  onEditUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      headers,
      method: "PUT",
      body: JSON.stringify(body)
    };

    this.setState({ isFetching: true });

    fetch(`https://reqres.in/api/users/${body.id}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        const newUsers = this.state.users.map(user => {
          if (user.id.toString() === body.id) {
            user = json;
          }
          return user;
        });
        this.setState(
          {
            isFetching: false,
            users: newUsers
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          editMode: false
        });
      });
  };

  onEditClick = () => {
    this.setState({ editMode: true });
  };

  render() {
    return (
      <App
        onAddUser={this.onAddUser}
        onEditUser={this.onEditUser}
        onDeleteUser={this.onDeleteUser}
        onEditClick={this.onEditClick}
        {...this.state}
      />
    );
  }
}

export default AppContainer;
